
import React, {Component} from 'react';
import {connect} from 'react-redux';

class Park extends React.Component{
  render(){
    return(
    <div className="container">
      <div className="row">
        <div className="Park">
          <div className="park-header">
            <h1>
            Welcome to AddlerPark
            </h1>
          </div>

          <div className='park-details'>
            <img className='badge'/>
            <h2>You visted this park 10 times!</h2>
            <img className='badge'/>
          </div>

          <div className='upcoming-events'>
            <ul>
              <li>April 1 - Ryan's Park Volunteer Work Party!</li>

              <li>April 1 - China Lake Volunteer Work Party!</li>
              <li>April 1 - Relax & Renew</li>
              <a href="/events"><li> Show more</li></a>
            </ul>
          </div>

          <div className='nearby-parks'>
            <ul>
              <li>Baltimore Park</li>
              <li>Cummings Park</li>
              <li>Roosevelt Park</li>

            </ul>
          </div>
        </div>
      </div>
    </div>

    )
  }
}

function mapStateToProps(state) {
    return {
        user: state.activeUser
    };
}

export default connect(mapStateToProps)(Park);
