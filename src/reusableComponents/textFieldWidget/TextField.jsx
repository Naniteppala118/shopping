import React from 'react';
import './TextField.css';

const TextField = ({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  name,
  icon: IconComponent,
  onIconClick,
  error
}) => {
  return (
    <div className="textFieldContainer">
      {label && <label className="textFieldLabel" htmlFor={name}>{label}</label>}
      <div className={`textFieldWrapper ${error ? 'error-border' : ''}`}>
        <input
          className="textFieldInput"
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {IconComponent && (
          <span className="textFieldIcon" onClick={onIconClick}>
            <IconComponent />
          </span>
        )}
      </div>
       {error && <p className="error-text">{error}</p>}
    </div>
  );
};

export default TextField;
