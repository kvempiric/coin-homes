import React from "react";
import "../css/Home.css";
// import { Link } from "react-router-dom";

const Home = () => {
  return (
    <React.Fragment>
      <div className="mainSection">
        <div className="content">
          <h1 className="heading">Live Anywhere.</h1>
          <p className="pera">
            Coin Homes is the first platform in North America that empowers you
            with inspiration, tools and knowledge to purchase real estate with
            Bitcoin.
          </p>
        </div>
        <div className="bg-img"></div>

        <div className="card home">
          <div className="card-header">
            <span className="heading-text-1">Home purchase</span>
            <span className="heading-text-2">Existing Home</span>
          </div>
          <div className="card-body">
            <form>
              <div className="form-row">
                <div className="form-group-1 col-md-3">
                  <label htmlFor="location">Location</label>
                  <select className="form-item-1" name="city">
                    <option value="New York,USA">New York,USA</option>
                  </select>
                </div>
                <div className="form-group-2 col-md-3">
                  <label htmlFor="lastName" className="form-label col-md-3">
                    Price
                  </label>
                  <input
                    type="text"
                    className="form-home col-md-3"
                    placeholder="$1,200,000"
                  />
                </div>
                <div className="form-group-3 col-md-3">
                  <label className="form-label col-md-3" htmlFor="email">YourBTC</label>
                  <input
                    type="text"
                    className="form-home col-md-3"
                    placeholder="B 99.99"
                  />
                </div>
                <button className="btn btn-sm col-md-3">Get Started</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
