import React, { useState } from "react";
import "../css/Sign-in.css";
import logo from "../Assets/Images/white.svg";
import { Link } from "react-router-dom";

function Signin() {
  const [phone_number, setPhone_number] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("You have submitted");
  };
  return (
    <div>
      <div className="text-center">
        <img className="img-fluided-signin" src={logo} alt="logo"/>
      </div>
      {/* <div className="row"> */}
      <div className="card-sign-in m-auto">
        <div className="header-sign-in">Welcome back, sign in here</div>
        <div className="card-sign-in-body">
          <form onSubmit={handleSubmit}>
            <input
              className="input-number-sign-in"
              type="text"
              placeholder="Phone Number"
              onChange={(e) => setPhone_number(e.target.value)}
              value={phone_number}
            />
            {/* <span className="text-number">Phone Number</span> */}
          </form>
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="reg-btn-sign-in"
        >
          <Link className="sign-in" to="/insert-otp">
            Sign in
          </Link>
        </button>
        <div className="link-sign-in">
          <p>
            Don’t have an account?<Link to="/register"> Register here </Link>
          </p>
        </div>
        <div className="footer-sign-in">
          Copyright © 2022 Coin Homes Inc. All rights reserved.
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default Signin;
