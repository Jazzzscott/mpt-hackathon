
import React, {Component} from 'react';
import {connect} from 'react-redux';

const Signup = () => (
  <div className="signup">
      <div className='header'>
        <h2>Park Square</h2>
      </div>
      <div className="icon">
      </div>

      <div className="main">
        <input className="input" placeholder="email"></input>
        <input className="input" placeholder="password"></input>
      <a href='/profile' > <button>Signup</button></a>
      </div>
   </div>
);

export default Signup;
