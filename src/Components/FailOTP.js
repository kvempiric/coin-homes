import React from "react";
import "../css/FailOTP.css";
import logo from "../Assets/Images/white.svg";

const FailOTP = () => {
  return (
    <div>
      <div className="img-port-fail position-relative"></div>
      <div className="position-absolute top-0">
        <div className="icon-fail">
          <img className="" src={logo} alt="logo" />
        </div>
        <div className="card fail">
          <div className="card-body">
            <h5 className="fail-title">Insert Your OTP Code</h5>
            <h6 className="fail-time">Time remaining 04:59</h6>
            <div className="fail-otp">
              <input type="text" className="fail-control" id="txt2" />
              <input type="text" className="fail-control" id="txt1" />
              <input type="text" className="fail-control" id="txt3" />
              <input type="text" className="fail-control" id="txt4" />
              <input type="text" className="fail-control" id="txt5" />
              <input type="text" className="fail-control" id="txt6" />
            </div>
            <div className="veri-text">
              <span>Code invalid. Check your number and try again</span>
            </div>
            <button className="back">Go back</button>
            <div className="extra-fail">
              <span>Copyright © 2022 Coin Homes Inc.</span>
              <span> All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FailOTP;
