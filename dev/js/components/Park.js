
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
            Welcome to AlderwoodPark!
            </h1>
          </div>

          <div className='park-details'>
            <img className='badge'/>
            <h2>You visted this park 10 times!</h2>
            <img className='badge'/>
          </div>

          <div className='upcoming-events'>
            <h2>Upcoming Events</h 2>
            <ul>
              <label>April 1 </label>
              <li> 9:00am - Ryan's Park Volunteer Work Party!</li>

              <li> 9:00am - China Lake Volunteer Work Party!</li>
              <li> 9:00am - Relax & Renew</li>
              <li> 10:00am - Family Nature Walk - Swan Creek Park</li>
              <a href="/events"><li> Show more</li></a>
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
