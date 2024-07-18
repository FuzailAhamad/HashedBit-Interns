import React from 'react';
import './Button.css';

const Button = ({ onClick, className, children }) => (
  <button onClick={onClick} className={`button ${className}`}>
    {children}
  </button>
);

export default Button;
