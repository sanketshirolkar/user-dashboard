import React from "react";
import "./input.css";

const Input = ({ value, onChange, type, placeholder, name, checked }) => {
  return (
    <div className="formInput">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        checked={checked}
      />
    </div>
  );
};

export default Input;
