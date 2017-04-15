
import React, {Component} from 'react';
import {connect} from 'react-redux';

class Event extends React.Component{
  render(){
    return(
    <div>
      <div className="event">
        HOLD OFF FOR NOW
      </div>
    </div>
    )
  }
}

function mapStateToProps(state) {
    return {
    };
}

export default connect(mapStateToProps)(Event);
