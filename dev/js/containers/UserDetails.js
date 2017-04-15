import React, {Component} from 'react';
import {connect} from 'react-redux';

import { browserHistory } from 'react-router';


class UserDetails extends React.Component{
  constructor(props){
    super(props);
    this.state={
      username:"",
      password:""
    }
    this.handleClick=this.handleClick.bind(this);

    handleClick(e){
     let newState = {};
     newState[e.target.name] = e.target.value;
     this.setState(newState);
    }

    verifyUser(){
      // var currentUser= this.state.username;
      // var users=this.props.users.email;
      // users.map(user=>
      //   if (user.email ===currentUser){
      //     this.props.selectedUser(user);
      //   }
      //   else{
      //     browserHistory.push('/Signup');
      //   }
      // )
      browserHistory.push('./profile');
    }

    }
  }
  render(){
    return(
    <input className="input" name="username" value={this.state.username} placeholder="email"></input>
    <input className="input" name="password" value={this.state.password} placeholder="password"></input>
    <button onClick=""> Singinup</button>
    )
  }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({selectedUser}, dispatch);
}
function mapStateToProps(state) {
    return {
        user: state.activeUser
    };
}


  export default connect(mapStateToProps)(UserDetails)
