import React from "react";
import logo from "./Images/log.png";
import "./Logo.css";
function Logo() {
  return (
    <div className="logo">
      <img src={logo} alt="Netflix_logo" />
    </div>
  );
}

export default Logo;
