import React from 'react';
import './RadioGroup.css';

const RadioGroup = ({ label, name, options, selectedValue, onChange, required = false }) => {
  return (
    <div className="radio-group">
      <label className="radio-label">
        {label}
        {required && <span className="required-asterisk"> *</span>}
      </label>
      <div className="radio-options">
        {options.map((option) => (
          <label key={option} className="radio-option">
            <input
              type="radio"
              name={name}
              value={option}
              checked={selectedValue === option}
              onChange={(e) => onChange(e.target.value)}
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioGroup;
