import React, { Component } from 'react'
import logo from '../images/V_logo_h_cruises_2x.png'

class Header extends Component {
  render () {
    return (
      <div className='trd-tablet-header-base'>
        <div className='header-base'>
          <div className='trd-header-logo'>
            <img src={logo} width='236' />
          </div>
        </div>

        <div className='center'>
          <div className='title cruise-hdr-details'>
            Luggage Tracker
          </div>
        </div>
      </div>

    )
  }
}

export default Header
