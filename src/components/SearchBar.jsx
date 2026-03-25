import React, { useState } from "react";
import { useSearch } from "../context/SearchContext";
import { useNavigate } from "react-router";

function SearchBar() {
  const {searchQuery, setQuery, onSearch, results} = useSearch();
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
    </div>
  );
}

export default SearchBar;