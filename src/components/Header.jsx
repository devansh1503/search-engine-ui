import React from "react";

function Header() {
  const letters = [
    { char: "G", color: "#4285F4" },
    { char: "O", color: "#EA4335" },
    { char: "O", color: "#FBBC05" },
    { char: "G", color: "#4285F4" },
    { char: "L", color: "#34A853" },
    { char: "E", color: "#EA4335" },
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "6px",
        marginBottom: "30px",
        userSelect: "none",
      }}
    >
      {letters.map((l, i) => (
        <span
          key={i}
          style={{
            fontSize: "60px",
            fontWeight: "700",
            color: l.color,
            fontFamily: "Product Sans, Arial, sans-serif",
            transition: "all 0.25s ease",
            display: "inline-block",
            cursor: "default",
            textShadow: "0 2px 10px rgba(0,0,0,0.25)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-6px) scale(1.15)";
            e.currentTarget.style.textShadow =
              "0 6px 25px rgba(0,0,0,0.5)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "none";
            e.currentTarget.style.textShadow =
              "0 2px 10px rgba(0,0,0,0.25)";
          }}
        >
          {l.char}
        </span>
      ))}
    </div>
  );
}

export default Header;