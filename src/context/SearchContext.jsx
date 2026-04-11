import { createContext, useContext, useState } from "react";
import { autocompleteAPI, searchAPI } from "../api/ApiService";
import { useNavigate } from "react-router";

const searchContext = createContext();

export const useSearch = () => {
    const context = useContext(searchContext)
    if(!context){
        throw new Error("Please use useSearch inside SearchProvider")
    }
    return context;
}

export const SearchProvider = ({children}) => {
    const [results, setResults] = useState(null);
    const [suggestions, setSuggestions] = useState([]);
    const [aiSummary, setAiSummary] = useState(null);
    const [query, setQuery] = useState(null);
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const onSearch = async (value) => {
        await searchAPI.query(value).then((res) => {
            setResults(res.data);
            if(res.data && res.data.length > 0){
                setSuggestions("")
                navigate("/results");
            }
        }).catch((err)=>{
            setResults(null)
            console.log(err)
        })
    }

    const onAISearch = async (data, q) => {
        setLoading(true)
        try{
            const res = await searchAPI.aisummary(data, q)
            setAiSummary(res.data)
        }
        catch(err) {
            setAiSummary("Error Could Not fetch")
            console.log(err)
        }
        finally {
            setLoading(false)
        }
    }

    const onTypeSuggest = async (val) => {
        await autocompleteAPI.query(val).then((res) => {
            setSuggestions(res.data);
        }).catch((err) => {
            console.log(err)
        })
    }
    const value = {
        results,
        suggestions,
        aiSummary,
        query,
        loading,
        setResults,
        setSuggestions,
        onSearch,
        onTypeSuggest,
        onAISearch,
        setQuery,
        setAiSummary,
    }

    return <searchContext.Provider value={value}>
        {children}
    </searchContext.Provider>
}