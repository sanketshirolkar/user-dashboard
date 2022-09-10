import React from "react";
import "./input.css";

const Input = ({ value, onChange, type, placeholder }) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
