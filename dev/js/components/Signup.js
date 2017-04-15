
import React, {Component} from 'react';
import {connect} from 'react-redux';

const Signup = () => (
  <div className="banner-image">
    <div className="container-fluid signup">
      <div className="row">
        <div className="col-sm-12">
          <div className="signupForm">
            <p>Welcome to ParkPoints, an app designed to encourage you to explore your local parks.</p>
            <hr className = "hrGreen"/>
            <input className="input" placeholder="email"></input>
            <input className="input" placeholder="password"></input>
            <a className="btn btn-default btn-lg btn-signup" href="#" role="button">Go</a>
            <hr className = "hrGreen"/>
            <p>Earn points every time you check in at a park. Once you''ve earned 50 points, redeem them for a voucher to a Tacoma Metro Park event! </p>
          </div>
        </div>
      </div>    
    </div>
  </div>  
);

export default Signup;
