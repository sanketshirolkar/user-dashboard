import React from "react";
import Input from "../input/Input";

const Checkbox = ({ label, value, onChange, name, checked }) => {
  return (
    <div>
      <Input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        name={name}
        value={value}
      />
      {label}
    </div>
  );
};

export default Checkbox;
