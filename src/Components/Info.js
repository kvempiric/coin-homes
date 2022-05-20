import React from "react";
import "../css/Info.css";
import image1 from "../Assets/Images/Frame14.svg";
import image2 from "../Assets/Images/Frame 13.svg";
import image3 from "../Assets/Images/Group 17.svg";
import image4 from "../Assets/Images/Group 18.svg";
import image5 from "../Assets/Images/Group 19.svg";

const Info = () => {
  return (
    <React.Fragment>
      <div className="main-container">
        <h5 className="text-heading">You are in the right company</h5>
        <p className="sm-text">
          Volutpat fermentum dolor viverra sagittis pulvinar diam. Pellentesque
          etiam erat sollicitudin diam fermentum. Lobortis pretium sit cursus
          est lacinia etiam. Et ac lectus.
        </p>
        <hr className="line1" />
        <div className="icon-info-1">
          <img className="icon-home" src={image1} alt="home-icon" />
          <span className="num1-home">2,219</span>
          <p className="img1-info">Available properties</p>
        </div>
        <div className="icon-inf-2">
          <img className="icon-smiley" src={image2} alt="home-icon" />
          <span className="num2-smiley">21K +</span>
          <p className="img2-info">
            This should be an explanation of the value prop.
          </p>
        </div>
        
          <div className="rect-info">
            <h1 className="coma"><b>''</b></h1>
            <h4 className="rect-heading">Feugiat scelerisque dui.</h4>
            <p className="box-pera">Volutpat fermentum dolor viverra sagittis pulvinar diam. Pellentesque etiam erat sollicitudin diam fermentum. Lobortis pretium sit cursus est lacinia etiam. Et ac lectus.</p>
            <h5 className="box-auther">— Andrew Bro</h5>
          </div>

        <h1 className="future-heading">Be your future solution</h1>
          
          <div className="future-detail">
            <img className="group-image1" src={image3} alt=""/>
            <h5 className="future-detail-heading">Buy, Sell and Rent</h5>
            <p className="future-pera">Eget senectus vivamus donec consectetur est sagittis. Sit orci tortor hac congue.</p>
          </div>

        <hr className="line2"/>

        <div>
          <img className="group-image2" src={image4} alt=""/>
          <h5 className="future-detail-heading2">Under collateralized.No Liquidations</h5>
          <p className="future-pera2">Cursus magnis duis sed tellus morbi egestas sollicitudin lectus justo. Justo.</p>
        </div>

        <hr className="line3" />

        <div>
          <img className="group-image3" src={image5} alt=""/>
          <h5 className="future-detail-heading3">Tax advantages</h5>
          <p className="future-pera3">Massa et morbi urna, tristique feugiat dolor at mi. Enim fringilla ullamcorper.</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Info;
