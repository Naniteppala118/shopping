import React from "react";
import "./InputWidget.css";

export default function InputWidget({ label, value, onChange, placeholder, rows = 1,labelFontSize = '16px', required = false, }) {
  return (
    <div className="input-widget">
      {label && <label className="input-label " style={{ fontSize: labelFontSize }}>{label}{required && <span className="required-asterisk"> *</span>}</label>}
      <textarea
        className="input-textarea"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
      />
    </div>
  );
}
