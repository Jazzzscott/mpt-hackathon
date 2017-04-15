import React from 'react';
import ReactDOM from 'react-dom';

class Parks extends React.Component {
  render(){
    return(
        <div className='container'>
          <div className='row'>
            <div className='col-sm-6 col-sm-offset-3'>
              <h1 className='text-center'>Tacoma Metro Parks</h1>
            </div>

            <div className='col-sm-10 col-sm-offset-2' id='park1'>
              <h3>Alderwood Park</h3>
              <div className='Parks col-sm-6'>
                <input className='col-sm-1' type='checkbox' checked/>
                <span className='col-sm-11'>Dog Friendly</span>
              </div>
              <div className='Parks col-sm-6'>
                <input className='col-sm-1' type='checkbox' />
                <span className='col-sm-11'>Play Spaces</span>
              </div>
              <div className='Parks col-sm-6'>
                <input className='col-sm-1' type='checkbox' checked/>
                <span className='col-sm-11'>Sports Facility</span>
              </div>
              <div className='Parks col-sm-6'>
                <input className='col-sm-1' type='checkbox' />
                <span className='col-sm-11'>ADA Accessible</span>
              </div>
              <div className='address col-sm-12'>
                208 Browns Point Blvd. Tacoma, WA 9842
              </div>
            </div>

            <hr className='col-sm-10 col-sm-offset-2'/>

            <div className='col-sm-10 col-sm-offset-2' id='park2'>
              <h3>Alling Park</h3>

              <div className='Parks col-sm-6'>
                <input className='col-sm-1' type='checkbox' checked/>
                <span className='col-sm-11'>Dog Friendly</span>
              </div>
              <div className='Parks col-sm-6'>
                <input className='col-sm-1' type='checkbox' />
                <span className='col-sm-11'>Play Spaces</span>
              </div>
              <div className='Parks col-sm-6'>
                <input className='col-sm-1' type='checkbox' />
                <span className='col-sm-11'>Sports Facility</span>
              </div>
              <div className='Parks col-sm-6'>
                <input className='col-sm-1' type='checkbox' checked/>
                <span className='col-sm-11'>ADA Accessible</span>
              </div>
              <div className='address col-sm-12'>
                208 Browns Point Blvd. Tacoma, WA 9842
              </div>
            </div>

            <hr className='col-sm-10 col-sm-offset-2'/>

            <div className='col-sm-10 col-sm-offset-2' id='park3'>
              <h3>Baltimore Park</h3>

              <div className='Parks col-sm-6'>
                <input className='col-sm-1' type='checkbox' checked/>
                <span className='col-sm-11'>Dog Friendly</span>
              </div>
              <div className='Parks col-sm-6'>
                <input className='col-sm-1' type='checkbox' checked/>
                <span className='col-sm-11'>Play Spaces</span>
              </div>
              <div className='Parks col-sm-6'>
                <input className='col-sm-1' type='checkbox' />
                <span className='col-sm-11'>Sports Facility</span>
              </div>
              <div className='Parks col-sm-6'>
                <input className='col-sm-1' type='checkbox' />
                <span className='col-sm-11'>ADA Accessible</span>
              </div>
              <div className='address col-sm-12'>
                208 Browns Point Blvd. Tacoma, WA 9842
              </div>
            </div>

            <hr className='col-sm-10 col-sm-offset-2'/>

            <div className='col-sm-10 col-sm-offset-2' id='park4'>
              <h3>Seacrest Park</h3>
              <div className='Parks col-sm-6'>
                <input className='col-sm-1' type='checkbox' checked/>
                <span className='col-sm-11'>Dog Friendly</span>
              </div>
              <div className='Parks col-sm-6'>
                <input className='col-sm-1' type='checkbox' checked/>
                <span className='col-sm-11'>Play Spaces</span>
              </div>
              <div className='Parks col-sm-6'>
                <input className='col-sm-1' type='checkbox' checked/>
                <span className='col-sm-11'>Sports Facility</span>
              </div>
              <div className='Parks col-sm-6'>
                <input className='col-sm-1' type='checkbox' checked/>
                <span className='col-sm-11'>ADA Accessible</span>
              </div>
              <div className='address col-sm-12'>
                208 Browns Point Blvd. Tacoma, WA 9842
              </div>
            </div>

          </div>
        </div>
    )
  }
};

export default Parks;
