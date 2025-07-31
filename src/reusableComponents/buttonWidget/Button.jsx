import React from 'react';
import './Button.css'

const Button = ({ text, icon, onClick,style={}, type = "button"}) => {
  

  return (
    <button type={type} onClick={onClick} className="buttonWidget" style={style}>
      {icon && <span>{icon}</span>}
      <span>{text}</span>
    </button>
  );
};

export default Button;
