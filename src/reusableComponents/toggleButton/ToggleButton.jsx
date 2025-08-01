import React from "react";
import "./ToggleButton.css";

export default function ToggleButton({
  isToggled,
  onToggle,
  width = 40,
  height = 20,
  activeColor = "#4caf50",
  inactiveColor = "#ccc",
  knobColor = "#fff",
}) {
  return (
    <div
      className="toggle-container"
      onClick={() => onToggle(!isToggled)}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: isToggled ? activeColor : inactiveColor,
        borderRadius: `${height / 2}px`,
        padding: "4px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        transition: "background-color 0.2s",
        justifyContent: isToggled ? "flex-end" : "flex-start",
      }}
    >
      <div
        style={{
          width: `${height - 8}px`,
          height: `${height - 8}px`,
          backgroundColor: knobColor,
          borderRadius: "50%",
          transition: "all 0.2s",
        }}
      />
    </div>
  );
}
