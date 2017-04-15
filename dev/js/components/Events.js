
import React, {Component} from 'react';
import EventView from './EventView';

class Events extends React.Component{
  constructor(){
    super();
    this.state={
      sort:"none"
    }
    this.sortHandler=this.sortHandler.bind(this)
  }
  sortHandler(e){
      var sortVal = e.target.value;
      this.setState({sort: sortVal})
  }

  render(){
    var sorted=this.state.sort;
    const sportsStyle={
      backgroundImage:"url('/img/sports.png') "
    }
    const natureStyle={
      backgroundImage:"url('/img/nature.png') "
    }
    const volunteerStyle={
      backgroundImage:"url('/img/volunteer.png')"
    }
    const familyStyle={
      backgroundImage:"url('/img/family.png')"
    }

    return(
      <div className="container">
        <div className="row">
          <div className="events">
              <button style={sportsStyle}  value="sports" onClick={this.sortHandler}> </button>
              <button style={natureStyle} value="nature" onClick={this.sortHandler}></button>
              <button style={volunteerStyle} value="volunteer" onClick={this.sortHandler}></button>
              <button style={familyStyle} value="family" onClick={this.sortHandler}></button>
            <EventView sorter={sorted} />
          </div>
        </div>
      </div>
    )
  }
}


export default Events;
