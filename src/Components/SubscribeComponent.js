import React from "react";
import "../css/SubscribeComponent.css";
import SubImg from "../Assets/Images/Mask group.svg";
import { Link } from "react-router-dom";

function SubscribeComponent() {
  return (
    <>
      <div className="container">
      <div className="mainSub">
        <div className="col-12">
          <div className="Sub-box text-center">
            <div className="row">
              <div className="col-6">
                  <h1 className="Sub-head mx-3 ">Ready to purchase your home now?</h1>
                  <div className="buttonDiv ">
                    <button className="btn btn_expalore_home ">Explore home <i class="fa-solid fa-angle-right mx-2"></i></button>
                  </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-6 Sub-img">
                <img className="ms-auto w-auto h-auto img-fluid" src={SubImg} alt="subImg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default SubscribeComponent;
