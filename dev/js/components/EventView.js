import React from 'react'

class EventView extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    console.log(this.props.sorter)
    const filter =this.props.sorter;

    if(filter==="none"){
      return(
        <div>
          <h3>Saturday, April 1</h3>
          <ul>
            <li>Ryan's Park Volunteer Work Party! - 9am</li>
            <li>China Lake Volunteer Work Party! - 9am</li>
            <li>Relax & Renew - 9am</li>
            <li>Family Nature Walk-Swan Creek Park - 10am</li>
          </ul>
          <h3>Monday, April 3</h3>
          <ul>
            <li>Spring Break Superstars at the Zoo - 10am</li>
          </ul>
          <h3>Monday, April 4</h3>
          <ul>
            <li>Spring Break Superstars at the Zoo - 10am</li>
          </ul>
          <h3>Monday, April 5</h3>
          <ul>
            <li>Spring Break Superstars at the Zoo - 10am</li>
            <li>Walk Tacoma Kick-Off -10am </li>
            <li>Cleveland Scoring Clinic -5:30pm</li>
          </ul>
          <h3>Monday, April 6</h3>
          <ul>
            <li>Spring Break Superstars at the Zoo - 10am</li>
          </ul>
          <h3>Monday, April 7</h3>
          <ul>
            <li>Spring Break Superstars at the Zoo - 10am</li>
          </ul>
        </div>
      )
    }else if (filter==="sports") {
      return (
        <div>
          <h3>Saturday, April 1</h3>
          <ul>
            <li>Relax & Renew - 9am</li>
          </ul>
          <h3>Monday, April 5</h3>
          <ul>
            <li>Walk Tacoma Kick-Off -10am </li>
            <li>Cleveland Scoring Clinic -5:30pm</li>
          </ul>
        </div>
      )
    }else if (filter==="nature") {
      return (
        <div>
          <h3>Saturday, April 1</h3>
          <ul>
            <li>Family Nature Walk-Swan Creek Park - 10am</li>
          </ul>
          <h3>Monday, April 3</h3>
          <ul>
            <li>Spring Break Superstars at the Zoo - 10am</li>
          </ul>
          <h3>Monday, April 4</h3>
          <ul>
            <li>Spring Break Superstars at the Zoo - 10am</li>
          </ul>
          <h3>Monday, April 6</h3>
          <ul>
            <li>Spring Break Superstars at the Zoo - 10am</li>
          </ul>
          <h3>Monday, April 7</h3>
          <ul>
            <li>Spring Break Superstars at the Zoo - 10am</li>
          </ul>
        </div>
      )
    }else if (filter==="volunteer") {
      return (
        <div>
          <h3>Saturday, April 1</h3>
          <ul>
            <li>Ryan's Park Volunteer Work Party! - 9am</li>
            <li>China Lake Volunteer Work Party! - 9am</li>
          </ul>
        </div>

      )
    }else if (filter==="family") {
      return (
        <div>
          <h3>Saturday, April 1</h3>
          <ul>
            <li>Family Nature Walk-Swan Creek Park - 10am</li>
          </ul>
          <h3>Monday, April 3</h3>
          <ul>
            <li>Spring Break Superstars at the Zoo - 10am</li>
          </ul>
          <h3>Monday, April 4</h3>
          <ul>
            <li>Spring Break Superstars at the Zoo - 10am</li>
          </ul>
          <h3>Monday, April 6</h3>
          <ul>
            <li>Spring Break Superstars at the Zoo - 10am</li>
          </ul>
          <h3>Monday, April 7</h3>
          <ul>
            <li>Spring Break Superstars at the Zoo - 10am</li>
          </ul>
        </div>
      )
    }
    else{
      return(<div>Empty</div>)
    }
  }
}
export default EventView;
