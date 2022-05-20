import React, { useState } from "react";
import "../css/Register.css";
import logo from "../Assets/Images/white.svg";
import { Link } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("You have submitted");
  };
  return (
    <div>
      <div className="text-center">
        <img className="img-fluid" src={logo} alt="logo"/>
      </div>
      <div className="card-regi mb-3 ">
        <div className="header">Register</div>
        <div className="body">
          <form onSubmit={handleSubmit}>
            <input
              className="input-name"
              placeholder="Your name"
              type="text"
              onChange={e=>setName(e.target.value)}
              value={name}
            />
            {/* <span className="text-name">Your Name</span> */}
            <input
              className="input-number"
              type="text"
              placeholder="Phone Number"
              onChange={e=>setPhone_number(e.target.value)}
              value={phone_number}
            />
            {/* <span className="text-number">Phone Number</span> */}
            <input
              className="input-email"
              type="email"
              placeholder="Youe Email"
              onChange={e=>setEmail(e.target.value)}
              value={email}
            />
            {/* <span className="text-email">Your email</span> */}
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label">
                By signing up, you agree to our ToC and policy
              </label>
            </div>
          </form>
        </div>
        <button type="submit" onClick={handleSubmit} className="reg-btn" >
          <Link className="sign-up" to="/sign-in">Sign me up</Link>
        </button>
        <div className="link">
          <p>
            Already have an account?<Link to="/sign-in"> Login here </Link>
          </p>
        </div>
        <div className="footer">
          Copyright © 2022 Coin Homes Inc. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default Register;
