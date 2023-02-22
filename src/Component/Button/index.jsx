import React from "react";
import "./style.css";

const Button = ({ type, label }) => {
  return (
    <button
      className={`button-common ${
        type === "primary" ? "button-primary" : "button-secondary"
      }`}
    >
      {label}
    </button>
  );
};

export default Button;
