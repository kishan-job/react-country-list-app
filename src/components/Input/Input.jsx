import React from "react";

function Input({ type, placeholder, onChange, name, error, ...props }) {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        required
      />
      {error && <div className="error"> { error}</div>}
    </>
  );
}

export default Input;
