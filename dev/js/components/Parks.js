import React from 'react';
import ReactDOM from 'react-dom';

class Parks extends React.Component {
  render(){
    return(
      <div>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 col-md-offset-3'>
              <h1 className='text-center'>Tacoma Metro Parks</h1>
            </div>

            <div className='col-md-10 col-md-offset-2' id='park1'>
              <h3>Alderwood Park</h3>
              <div className='Parks col-md-6'>
                <input className='col-md-1' type='checkbox' />
                <p className='col-md-11'>Dog Friendly</p>
              </div>
              <div className='Parks col-md-6'>
                <input className='col-md-1' type='checkbox' />
                <p className='col-md-11'>Play Spaces</p>
              </div>
              <div className='Parks col-md-6'>
                <input className='col-md-1' type='checkbox' />
                <p className='col-md-11'>Sports Facility</p>
              </div>
              <div className='Parks col-md-6'>
                <input className='col-md-1' type='checkbox' />
                <p className='col-md-11'>ADA Accessible</p>
              </div>
              <div className='address col-md-12'>
                208 Browns Point Blvd. Tacoma, WA 9842
              </div>
            </div>

            <hr className='col-md-10 col-md-offset-2'/>

            <div className='col-md-10 col-md-offset-2' id='park2'>
              <h3>Alling Park</h3>

              <div className='Parks col-md-6'>
                <input className='col-md-1' type='checkbox' />
                <p className='col-md-11'>Dog Friendly</p>
              </div>
              <div className='Parks col-md-6'>
                <input className='col-md-1' type='checkbox' />
                <p className='col-md-11'>Play Spaces</p>
              </div>
              <div className='Parks col-md-6'>
                <input className='col-md-1' type='checkbox' />
                <p className='col-md-11'>Sports Facility</p>
              </div>
              <div className='Parks col-md-6'>
                <input className='col-md-1' type='checkbox' />
                <p className='col-md-11'>ADA Accessible</p>
              </div>
              <div className='address col-md-12'>
                208 Browns Point Blvd. Tacoma, WA 9842
              </div>
            </div>

            <hr className='col-md-10 col-md-offset-2'/>

            <div className='col-md-10 col-md-offset-2' id='park3'>
              <h3>Baltimore Park</h3>

              <div className='Parks col-md-6'>
                <input className='col-md-1' type='checkbox' />
                <p className='col-md-11'>Dog Friendly</p>
              </div>
              <div className='Parks col-md-6'>
                <input className='col-md-1' type='checkbox' />
                <p className='col-md-11'>Play Spaces</p>
              </div>
              <div className='Parks col-md-6'>
                <input className='col-md-1' type='checkbox' />
                <p className='col-md-11'>Sports Facility</p>
              </div>
              <div className='Parks col-md-6'>
                <input className='col-md-1' type='checkbox' />
                <p className='col-md-11'>ADA Accessible</p>
              </div>
              <div className='address col-md-12'>
                208 Browns Point Blvd. Tacoma, WA 9842
              </div>
            </div>

            <hr className='col-md-10 col-md-offset-2'/>

            <div className='col-md-10 col-md-offset-2' id='park4'>
              <h3>Seacrest Park</h3>
              <div className='Parks col-md-6'>
                <input className='col-md-1' type='checkbox' />
                <p className='col-md-11'>Dog Friendly</p>
              </div>
              <div className='Parks col-md-6'>
                <input className='col-md-1' type='checkbox' />
                <p className='col-md-11'>Play Spaces</p>
              </div>
              <div className='Parks col-md-6'>
                <input className='col-md-1' type='checkbox' />
                <p className='col-md-11'>Sports Facility</p>
              </div>
              <div className='Parks col-md-6'>
                <input className='col-md-1' type='checkbox' />
                <p className='col-md-11'>ADA Accessible</p>
              </div>
              <div className='address col-md-12'>
                208 Browns Point Blvd. Tacoma, WA 9842
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
};

export default Parks;
