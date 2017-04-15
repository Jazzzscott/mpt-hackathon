import React from 'react'

class ParkPoints extends React.Component {
  render() {
    return(
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12 parkPoints'>
            <img className='img-responsive img-center' src='/img/MPTH_badge.png' />
            <span className='badge-number col-sm-12 text-center'>12</span>
          </div>
        </div>
      </div>
    )
  }
}

export default ParkPoints
