import React, { useState, useEffect } from "react";
import "./Header.css";
import avatarNetflix from "./Images/avatarNetflix.png";
import netflixlogo from "./Images/netflixlogo.png";
function Header() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    //   return ()=>{
    //     window.removeEventListener("scroll");
    //   }
  }, []);
  return (
    <div className={`Nav ${show && "nav__black"}`}>
      <img src={netflixlogo} alt="Netflix_logo" className="Nav__logo" />
      <img src={avatarNetflix} alt="netflex Logo" className="avatar" />
    </div>
  );
}

export default Header;
