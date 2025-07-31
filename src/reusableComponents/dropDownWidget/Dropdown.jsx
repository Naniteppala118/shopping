import React from 'react';
import './Dropdown.css';

const Dropdown = ({ label, options,placeHolder, value, onChange, name, required = false,style={} }) => {
  return (
    <div className="dropdown-group" style={style}>
      {label && (
        <label className="dropdown-label">
          {label}
          {required && <span className="required-asterisk"> *</span>}
        </label>
      )}
      <select
        className="dropdown-select"
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
      >
        <option value="" disabled>
          --Select--
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
