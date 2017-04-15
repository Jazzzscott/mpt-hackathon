
import React, {Component} from 'react';
import {connect} from 'react-redux';

const Signup = () => (
  <div className="signup">
      <div className="icon">
      </div>

      <div className="main">

        <input className="input" placeholder="email"></input>

        <input className="input" placeholder="password"></input>

        <button> Singin/up</button>
      </div>
   </div>

);

export default Signup;
