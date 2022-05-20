import React, { useState } from "react";
import "../css/InsertOTP.css";
import logo from "../Assets/Images/white.svg";

const Insert_OTP = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    //focus next input
    if (element.nextInput) {
      element.nextInput.focus();
    }
  };
  return (
    <div>
      <div className='back-img position-relative'></div>
        <div className="position-absolute top-0">
        <div className="text-logo">
          <img className="" src={logo} alt="logo" />
        </div>
        <div className="card otp">
          <div className="card-body">
            <h5 className="card-title">Insert Your OTP Code</h5>
            <h6 className="otp-time">Time remaining 04:59</h6>
            <div className="enter-otp">
              {otp.map((data, index) => {
                return (
                  <input
                    type="text"
                    className="form-control mark20"
                    autofocus=""
                    maxLength="1"
                    key={index}
                    value={data}
                    onChange={(e) => handleChange(e.target, index)}
                    onFocus={(e) => e.target.select()}
                  />
                );
              })}

              {/* <input type="text" className="form-control" id="txt2" />
            <input type="text" className="form-control" id="txt3" />
            <input type="text" className="form-control" id="txt4" />
            <input type="text" className="form-control" id="txt5" />
            <input type="text" className="form-control" id="txt6" /> */}
            </div>
            <div className="re-text">
              <span>Didn’t receive any code? </span>
              <span className="corsor">Resend</span>
            </div>
            <div className="extra-info">
              <span>Copyright © 2022 Coin Homes Inc.</span>
              <span> All rights reserved.</span>
            </div>
          </div>
        </div>
        </div>
      
    </div>
  );
};

export default Insert_OTP;
