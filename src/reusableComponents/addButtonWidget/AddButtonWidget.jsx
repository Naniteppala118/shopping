import React from 'react';
import './AddButtonWidget.css';

const AddButtonWidget = ({ text, icon, onClick, type = 'button', style = {}, fontSize}) => {
  return (
    <button type={type} onClick={onClick} style={style} className={`buttonWidget`}>
      {icon && <span className="buttonIcon" >{icon}</span>}
      <span className="buttonText" style={{fontSize: fontSize}}>{text}</span>
    </button>
  );
};

export default AddButtonWidget;
