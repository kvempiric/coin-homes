import React from "react";
import "../css/DetailNav.css";
import logo from "../Assets/Images/white.svg";
import { Link } from "react-router-dom";

const DetailNav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-light">
        <div className="container">
          <img className="navbar-brand" src={logo} alt="logo" />
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars text-dark"></i>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav text-center">
              <li
                className="nav-item"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
              >
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/about"
                >
                  <i class="fa-regular fa-bookmark"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/help">
                  <i class="fa-regular fa-comment"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contect">
                  <i class="fa-regular fa-circle-user"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default DetailNav;
