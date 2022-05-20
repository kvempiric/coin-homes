import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import logo from "../Assets/Images/white.svg";

const Navbar = () => {
  const [isSet, setIsSet] = useState(false);
  return (
    <nav className="navbar-home">
      <img className="logo" src={logo} alt="logo" />
      <ul
        className={isSet ? "nav-links-set" : "nav-links"}
        onClick={() => setIsSet(false)} >
        <Link to="/about" className="about">
          <li>About</li>
        </Link>
        <Link to="/help" className="help">
          <li>Help</li>
        </Link>
        <Link to="/contact" className="contact">
          <li>Conatct</li>
        </Link>
        <Link to="/signin" className="signin">
          <li>SignIn</li>
        </Link>
        <Link to="/register" className="register">
          <li>Register</li>
        </Link>
      </ul>
      <button className="set-menu-icon" onClick={() => setIsSet(!isSet)}>
        {isSet ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-bars"></i>
        )}
      </button>
    </nav>
  );
};

export default Navbar;
