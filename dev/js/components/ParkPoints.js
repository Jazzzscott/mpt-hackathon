import React from 'react'

class ParkPoints extends React.Component {
  render() {
    return(
      <div className='container parkPointsContainer'>
        <div className='row parkPointsTopRow'>
          <div className='col-sm-12 parkPoints'>
            <img className='img-responsive img-center' src='/img/MPTH_badge.png' />
            <span className='badge-number col-sm-12 text-center'>12</span>
          </div>
        </div>

        <hr className='col-sm-12 hrGreen'/>

        <div className='row parkPoints'>
          <h3 className='col-sm-12'>Redeem</h3>
          <div className='col-sm-12'>
            <label><input type='radio' /> Event Voucher</label>
          </div>
          <div className='col-sm-12'>
            <label><input type='radio' /> Class Discount Code</label>
          </div>
          <div className='col-sm-12'>
            <label><input type='radio' /> Zoo Ticket Discount Code</label>
          </div>
          <div className='col-sm-12'>
            <label><input type='radio' /> Donate My ParkPoints</label>
          </div>
          <div className='col-sm-6 col-sm-offset-3'>
            <button className='btn btn-woohoo form-control'>WooHoo!</button>
          </div>
        </div>
      </div>
    )
  }
}

export default ParkPoints
