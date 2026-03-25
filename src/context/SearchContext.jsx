import { createContext, useContext, useState } from "react";
import { searchAPI } from "../api/ApiService";

const searchContext = createContext();

export const useSearch = () => {
    const context = useContext(searchContext)
    if(!context){
        throw new Error("Please use useSearch inside SearchProvider")
    }
    return context;
}

export const SearchProvider = ({children}) => {
    const [searchQuery, setQuery] = useState(null);
    const [results, setResults] = useState(null);

    const onSearch = async () => {
        await searchAPI.query(searchQuery).then((res) => {
            setResults(res.data);
        }).catch((err)=>{
            setResults(null)
            console.log(err)
        })
    }
    const value = {
        searchQuery,
        results,
        setQuery,
        setResults,
        onSearch,
    }

    return <searchContext.Provider value={value}>
        {children}
    </searchContext.Provider>
}