
import React, {Component} from 'react';
import {connect} from 'react-redux';

const Signup = () => (
  <div className="container-fluid signup">
    <div className="row">
      <div className="col-sm-12">
        <div className="signupForm">
          <p>Welcome to ParkPoints, an app designed to encourage you to explore your local parks.</p>
          <input className="input" placeholder="email"></input>
          <input className="input" placeholder="password"></input>
          <button>Signup</button>
        </div>
      </div>
    </div>    
   </div>
);

export default Signup;
