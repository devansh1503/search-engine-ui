import React from "react";
import { useSearch } from "../context/SearchContext";

function AISummary() {
  const { results, query, aiSummary, onAISearch, loading } = useSearch();

  return (
    <div
      style={{
        marginTop: "30px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "720px",
          padding: "20px 22px",
          borderRadius: "18px",
          background: "rgba(30,41,59,0.55)",
          backdropFilter: "blur(16px)",
          border: "1px solid rgba(148,163,184,0.15)",
          boxShadow: "0 12px 40px rgba(0,0,0,0.5)",
          transition: "all 0.25s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow =
            "0 18px 60px rgba(0,0,0,0.7)";
          e.currentTarget.style.border =
            "1px solid rgba(99,102,241,0.4)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow =
            "0 12px 40px rgba(0,0,0,0.5)";
          e.currentTarget.style.border =
            "1px solid rgba(148,163,184,0.15)";
        }}
      >
        {aiSummary ? (
          <div>
            {/* Header */}
            <div
              style={{
                fontSize: "14px",
                color: "#a5b4fc",
                marginBottom: "10px",
                fontWeight: "500",
                letterSpacing: "0.5px",
              }}
            >
              ✨ AI Summary
            </div>

            {/* Content */}
            <div
              style={{
                fontSize: "15px",
                lineHeight: "1.7",
                color: "#e2e8f0",
                whiteSpace: "pre-line",
              }}
            >
              {aiSummary}
            </div>
          </div>
        ) : loading ? (
          <div style={{ textAlign: "center", padding: "20px" }}>
            <div
              style={{
                width: "36px",
                height: "36px",
                border: "4px solid rgba(148,163,184,0.2)",
                borderTop: "4px solid #6366f1",
                borderRadius: "50%",
                animation: "spin 1s linear infinite",
                margin: "0 auto",
              }}
            />
            <div
              style={{
                marginTop: "12px",
                fontSize: "13px",
                color: "#94a3b8",
              }}
            >
              Generating summary...
            </div>
          </div>
        ) : 
        (
          <div style={{ textAlign: "center" }}>
            <button
              onClick={() => {
                onAISearch(results.slice(0,5), query)
              }}
              style={{
                padding: "12px 20px",
                borderRadius: "999px",
                border: "none",
                background:
                  "linear-gradient(135deg, #6366f1, #8b5cf6)",
                color: "white",
                fontSize: "14px",
                fontWeight: "500",
                cursor: "pointer",
                transition: "all 0.2s ease",
                boxShadow: "0 8px 25px rgba(99,102,241,0.5)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.06)";
                e.currentTarget.style.boxShadow =
                  "0 12px 35px rgba(139,92,246,0.7)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow =
                  "0 8px 25px rgba(99,102,241,0.5)";
              }}
              onMouseDown={(e) => {
                e.currentTarget.style.transform = "scale(0.95)";
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.transform = "scale(1.06)";
              }}
            >
              ✨ Summarise with AI
            </button>

            <div
              style={{
                marginTop: "10px",
                fontSize: "12px",
                color: "#64748b",
              }}
            >
              Get a quick overview powered by AI
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AISummary;