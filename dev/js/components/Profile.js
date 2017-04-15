import React from 'react'

class Profile extends React.Component{
  render(){
    return( <
    <div className="profile">
      <h2>CHECK IN</h2>

      <img className="img-rounded" src={this.props.user.picture}>
      <p>Name: {this.props.user.first} {this.props.user.last} </p>
      <p>Location: {this.props.user.location}
      <p>{this.props.numberOfVisits} Total Visits</p>
      <process bar to goal>
      <div className="badge">
        <p>most visited park </p>
        <img>
      </div>
      <div className="badge">
        <p>number of different parks visited</p>
        <img>
      </div>
      <div className="badge">
        <p>days visited this year</p>
        <img>
      </div>
    </div>

    )
  }
}


ReactDOM.render(<Profile />,document.getElementById('app'));
