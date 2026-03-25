import React, { useEffect, useState } from "react";
import { useSearch } from "../context/SearchContext";
import { useNavigate } from "react-router";
import { autocompleteAPI } from "../api/ApiService";

function SearchBar() {
  const {searchQuery, setQuery, onSearch, results} = useSearch();
  const [suggestions, setSuggestions] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);

  const suggestionCall = async() => {
    await autocompleteAPI.query(searchQuery).then((res)=>{
      setSuggestions(res.data)
    }).catch((e)=>console.log(e))
  }

  const selectSuggestion = (value) => {
    setQuery(value);
    setSuggestions([]);
  };

  useEffect(() => {
    const delay = setTimeout(() => {
      if (searchQuery) suggestionCall();
    }, 300);

    return () => clearTimeout(delay);
  }, [searchQuery]);

  const navigate = useNavigate()

  const searchClick = () => {
    onSearch()
    if(results && results.length > 0){
      navigate("/results");
    }
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        position: "relative",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "720px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          padding: "10px",
          borderRadius: "999px",
          background: "rgba(30,41,59,0.55)",
          backdropFilter: "blur(14px)",
          border: "1px solid rgba(148,163,184,0.15)",
          boxShadow: "0 10px 35px rgba(0,0,0,0.45)",
          transition: "all 0.25s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow =
            "0 14px 50px rgba(0,0,0,0.65)";
          e.currentTarget.style.border =
            "1px solid rgba(96,165,250,0.45)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow =
            "0 10px 35px rgba(0,0,0,0.45)";
          e.currentTarget.style.border =
            "1px solid rgba(148,163,184,0.15)";
        }}
      >
        {/* Input */}
        <input
          value={searchQuery}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search the web..."
          style={{
            flex: 1,
            background: "transparent",
            border: "none",
            outline: "none",
            color: "#e2e8f0",
            fontSize: "16px",
            padding: "10px 14px",
            letterSpacing: "0.3px",
          }}
        />

        {/* Button */}
        <button
          style={{
            padding: "10px 18px",
            borderRadius: "999px",
            border: "none",
            background:
              "linear-gradient(135deg, #3b82f6, #6366f1)",
            color: "white",
            fontSize: "14px",
            fontWeight: "500",
            cursor: "pointer",
            transition: "all 0.2s ease",
            boxShadow: "0 6px 18px rgba(59,130,246,0.4)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow =
              "0 10px 28px rgba(99,102,241,0.6)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "none";
            e.currentTarget.style.boxShadow =
              "0 6px 18px rgba(59,130,246,0.4)";
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.transform = "scale(0.95)";
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onClick={searchClick}
        >
          Search
        </button>

      </div>

      {suggestions && suggestions.length > 0 && (
  <div
    style={{
      position: "absolute",
      top: "70px",
      width: "100%",
      maxWidth: "720px",
      background: "rgba(15,23,42,0.95)",
      backdropFilter: "blur(18px)",
      border: "1px solid rgba(148,163,184,0.15)",
      borderRadius: "18px",
      boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
      overflow: "hidden",
      zIndex: 50,
    }}
  >
    {suggestions.map((item, index) => (
        <div
          key={index}
          onClick={() => selectSuggestion(item)}
          onMouseEnter={() => setActiveIndex(index)}
          style={{
            padding: "12px 16px",
            cursor: "pointer",
            fontSize: "14px",
            color: "#e2e8f0",
            background:
              index === activeIndex
                ? "rgba(59,130,246,0.15)"
                : "transparent",
            transition: "all 0.15s ease",
            borderBottom:
              index !== suggestions.length - 1
                ? "1px solid rgba(148,163,184,0.08)"
                : "none",
          }}
        >
          {item}
        </div>
      ))}
    </div>
  )}
    </div>
  );
}

export default SearchBar;