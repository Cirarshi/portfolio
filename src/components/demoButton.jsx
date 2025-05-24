import React from "react";

function demoButton({ children, link, className = "", ...props }) {
  const baseStyle =
    "px-4 py-2 rounded-2xl shadow text-white bg-blue-600 hover:bg-blue-700 transition duration-200";

  const handleClick = () => {
    if (link) {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`${baseStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default demoButton;
