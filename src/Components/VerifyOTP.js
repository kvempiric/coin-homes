import React from "react";
import "../css/VerifyOTP.css";
import logo from "../Assets/Images/white.svg";

const VerifyOTP = () => {
  return (
    <div>
      <div className="img-port position-relative"></div>
      <div className="position-absolute top-0 ">
        <div className="icon">
          <img className="" src={logo} alt="logo" />
        </div>
        <div className="card verify">
          <div className="card-body">
            <h5 className="verify-title">Insert Your OTP Code</h5>
            <h6 className="veri-time">Time remaining 04:59</h6>
            <div className="veri-otp">
              <input type="text" className="veri-control" id="txt2" />
              <input type="text" className="veri-control" id="txt1" />
              <input type="text" className="veri-control" id="txt3" />
              <input type="text" className="veri-control" id="txt4" />
              <input type="text" className="veri-control" id="txt5" />
              <input type="text" className="veri-control" id="txt6" />
            </div>
            <div className="veri-text">
              <span>Verfiying...</span>
            </div>
            <div className="extra-veri">
              <span>Copyright © 2022 Coin Homes Inc.</span>
              <span> All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyOTP;
