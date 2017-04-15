import React from 'react'

class Park extends React.Component{
  render(){
    return(
    <div>
      <div className="park-header">
        Welcome to {this.props.park.name}
      </div>

      <div className='park-details'>
        <img className='badge'>
        you visisted this park {this.props.park.visits} number of times!
        <img className='badge'>
      </div>

      <div className='upcoming-events'>
        <ul>
          <li>event 1</li>
          <li>event 2</li>
          <li>event 3</li>
        </ul>
      </div>

      <div className='nearby-parks'>
        <ul>
          <li>park 1</li>
          <li>park 2</li>
          <li>park 3</li>
        </ul>
      </div>
    </div>

    )
  }
}


ReactDOM.render(<Park />,document.getElementById('app'));
