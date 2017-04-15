
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectUser} from '../actions/index'


const Profile = () => (

  <div className="container-fluid profile">
    <div className="row">
      <div className="col-sm-12">
        <div>
          <a className="btn btn-default btn-lg btn-block btn-custom" href="#" role="button">Check In</a>
        </div>
      </div>
      <div className="row">  
        <div className="col-sm-12 separator">
          <hr/>
        </div> 
      </div>
      <div className="col-sm-6 profileImage">  
        <div>
          <img className="img-rounded img-responsive" src="/img/avatar.png"></img>
        </div>
      </div>
      <div className="col-sm-6 profileText">  
        <div>
          <p>Name: Jasmine Scott </p>
          <p>Location: Tacoma, WA</p>
          <p> 12 Total Visits</p>
          <progress value="20" max="100"></progress>
        </div>
      </div> 
    </div>
    <div className="row">  
      <div className="col-sm-12 separator">
        <hr/>
      </div> 
    </div>
    <div className="row">
      <div className=" col-xs-8 badgeText">
        <p>Most Visited Park </p>
      </div>  
      <div className=" col-xs-4 badgeImg">
        <img className="img-responsive" src="/img/MPTH_badge.png"></img>
        <span>12</span>
      </div>  
    </div>
    <div className="row">
      <div className=" col-xs-8 badgeText">
        <p>Different Parks Visted</p>
      </div>  
      <div className=" col-xs-4 badgeImg">
        <img className="img-responsive" src="/img/MPTH_badge.png"></img>
        <span>12</span>
      </div>  
    </div>
    <div className="row">
      <div className=" col-xs-8 badgeText">
        <p>Days Visited This Year</p>
      </div>  
      <div className=" col-xs-4 badgeImg">
        <img className="img-responsive" src="/img/MPTH_badge.png"></img>
        <span>12</span>
      </div>  
    </div>
  </div>  



  /*  
        

        <div className="badge">
          <p>number of different parks visited</p>
          <img />
        </div>

        <div className="badge">
          <p>days visited this year</p>
          <img />
        </div>
      </div>
    </div>  
    */
);

function mapStateToProps(state) {
    return {
        user: state.activeUser
    };
}
export default Profile;
