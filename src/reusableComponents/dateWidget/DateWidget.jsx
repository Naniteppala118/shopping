import React from 'react';
import './DateWidget.css'; // Optional styling

const DateWidget = ({ label, name, value, onChange, required = false,style={} }) => {
  return (
    <div className="date-widget">
      {label && (
        <label className="date-label">
          {label}
          {required && <span className="required-asterisk"> *</span>}
        </label>
      )}
      <input
        type="date"
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="date-input"
        required={required}
        style={style}
      />
    </div>
  );
};

export default DateWidget;
