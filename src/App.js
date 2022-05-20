import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Help from "./Components/Help";
import Contact from "./Components/Contact";
import Signin from "./Components/Sign-in";
import Register from "./Components/Register";
import Info from "./Components/Info";
import InsertOTP from "./Components/InsertOTP";
import VerifyOTP from "./Components/VerifyOTP";
import FailOTP from "./Components/FailOTP";
import DetailNav from "./Components/DetailNav";
import DetailPropety from "./Components/DetailPropety";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import FeaturedComponent from "./Components/FeaturedComponent";
import TermsAndCondition from "./Components/TermsAndCondition";
import BitcoinWhitePaper from "./Components/BitcoinWhitePaper";
import CompareToOthers from "./Components/CompareToOthers";
import Onboard from "./Components/Onboard";
import NavbarAfterLogin from "./Components/NavbarAfterLogin";
import Deposit from "./Components/Deposit";
import Error404 from "./Components/Error404";
import Error405 from "./Components/Error405";
// import { useState } from 'react/cjs/react.production.min';

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/'>
          <NavBar/>
            <Home />
            <Info />
            <FeaturedComponent/>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/help">
            <Help />
          </Route>

          <Route exact path="/contact">
            <Contact />
          </Route>

          <Route exact path="/sign-in">
            <Signin />
          </Route>

          <Route exact path="/register">
            <Register />
          </Route>

          <Route exact path="/insert-otp">
            <InsertOTP/>
          </Route>

          <Route exact path="/verifyOtp">
            <VerifyOTP/>
          </Route>

          <Route exact path="/failOtp">
            <FailOTP/>
          </Route>
          <Route exact path="/property-details">
            <DetailNav/>
            <DetailPropety/>
            <Footer/>
          </Route>
          <Route exact path="/privacypolicy">
            <NavBar/>
            <PrivacyPolicy/>
            <Footer/>
          </Route>
          <Route exact path="/termsandcondition">
            <NavBar/>
            <TermsAndCondition/>
            <Footer/>
          </Route>
          <Route exact path="/bitcoinWhitepaper">
            <NavBar/>
            <BitcoinWhitePaper/>
            <Footer/>
          </Route>
          <Route exact path="/comparetoothers">
            <NavBar/>
            <CompareToOthers/>
            <Footer/>
          </Route>
          <Route exact path="/onboard">
            <NavBar/>
            <Onboard/>
            <Footer/>
          </Route>
          <Route exact path="/deposit">
            <NavbarAfterLogin/>
            <Deposit/>
          </Route>
          <Route exact path="/error404">
            <NavbarAfterLogin/>
            <Error404/>
          </Route>
          <Route exact path="/error405">
            <NavbarAfterLogin/>
            <Error405/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
export default App;
