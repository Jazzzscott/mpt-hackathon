
import React, {Component} from 'react';
import {connect} from 'react-redux';

class Profile extends React.Component{
  render(){
    return(
    <div class="profile">
      <h2>CHECK IN</h2>

      <img class="img-rounded" src={this.props.user.thumbnail}></img>
      <p>Name: {this.props.user.first} {this.props.user.last} </p>
      <p>Location: {this.props.user.location}</p>
      <p>{this.props.total} Total Visits</p>

      <div class="badge">
        <p>most visited park </p>
        <img />
      </div>

      <div class="badge">
        <p>number of different parks visited</p>
        <img />
      </div>

      <div class="badge">
        <p>days visited this year</p>
        <img />
      </div>
    </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        user: state.activeUser
    };
}

export default connect(mapStateToProps)(Profile);
