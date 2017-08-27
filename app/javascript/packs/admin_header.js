import React, { Component } from 'react'
import LegacyModeExample from './qr_guest_scan'
import V_logo_h_cruises_2x from './images/V_logo_h_cruises_2x.png'
class AdminHeader extends React.Component {

  render () {
    //var image_path = require()
    return (
      <div className='trd-tablet-header-base'>
        <div className='header-base'>
          <div className='trd-header-logo'>
            <img src={V_logo_h_cruises_2x} width="236" />
          </div>
        </div>

        <div className='center'>
          <div className='title cruise-hdr-details'>
            Staff Luggage Tracker
          </div>
        </div>

      </div>

    )
  }
}

export default AdminHeader
