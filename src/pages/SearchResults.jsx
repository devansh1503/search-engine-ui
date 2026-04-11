import React from "react";
import SearchBar from "../components/SearchBar";
import { useSearch } from "../context/SearchContext";
import AISummary from "../components/AISummary";

function SearchResults() {
  const {results} = useSearch();
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f172a, #020617)",
        color: "#e2e8f0",
        fontFamily: "Inter, sans-serif",
        padding: "40px 20px",
      }}
    >
        <SearchBar/>

      {/* Results */}
      <div
        style={{
          maxWidth: "720px",
          margin: "0 auto",
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "26px",
        }}
      >
        <AISummary/>
        {results.map((result, index) => (
          <div
            key={index}
            onClick={()=>{window.open(result.url, "_blank")}}
            style={{
              padding: "18px 22px",
              borderRadius: "16px",
              background: "rgba(30,41,59,0.55)",
              backdropFilter: "blur(14px)",
              border: "1px solid rgba(148,163,184,0.15)",
              transition: "all 0.25s ease",
              cursor: "pointer",
              boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px) scale(1.01)";
              e.currentTarget.style.boxShadow =
                "0 12px 40px rgba(0,0,0,0.5)";
              e.currentTarget.style.border =
                "1px solid rgba(96,165,250,0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow =
                "0 6px 20px rgba(0,0,0,0.3)";
              e.currentTarget.style.border =
                "1px solid rgba(148,163,184,0.15)";
            }}
          >
            <div
              style={{
                fontSize: "13px",
                color: "#22c55e",
                marginBottom: "4px",
                opacity: 0.9,
              }}
            >
              {result.url}
            </div>

            <div
              style={{
                fontSize: "20px",
                color: "#60a5fa",
                marginBottom: "6px",
                fontWeight: 500,
              }}
            >
              {result.title}
            </div>

            <div
              style={{
                fontSize: "14px",
                color: "#94a3b8",
                lineHeight: "1.6",
              }}
            >
              {result.snippet.slice(0, 150)+"..."}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchResults;