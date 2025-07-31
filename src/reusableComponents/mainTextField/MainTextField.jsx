import React from 'react';
import './MainTextField.css'; // Optional: for custom styles

const MainTextField = ({
  type = 'text',
  value,
  onChange,
  placeholder = '',
  label = '',
  name,
  required = false,
  disabled = false,
  icon,
  style = {},
  labelFontSize = '16px'
  
}) => {
  return (
    <div className="text-field-container">
      {label && <label className="text-field-label" style={{ fontSize: labelFontSize }}>{label}{required && <span className="required-asterisk"> *</span>}</label>}
      <div className="text-field-input-wrapper">
        {icon && <span className="text-field-icon">{icon}</span>}
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          className="text-field-input"
          style={style}
        />
      </div>
    </div>
  );
};

export default MainTextField;
