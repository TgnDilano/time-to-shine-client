import React from "react";

const LineTitle = ({ title, color = "white" | "gold", showLine = false }) => {
  var colorStyle = color === "gold" ? "bg-gold" : "bg-white";
  return (
    <div className={`flex items-center gap-x-2`}>
      <div className={`w-16 h-[0.15rem] ${colorStyle}`}></div>
      <h6 className="titleMedium">{title}</h6>
      {showLine && <div className={`w-16 h-[0.15rem] ${colorStyle}`}></div>}
    </div>
  );
};

export default LineTitle;
