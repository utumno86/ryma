import React, { Component } from 'react'  
import logo from './images/V_logo_h_cruises_2x.png'

class StatusHeader extends React.Component {
  

  render () {
    //var image_path = require()
    return (
      <div className='trd-tablet-header-base'>
        <div className='header-base'>
          <div className='trd-header-logo'>
            <img src={logo} width="236" />
          </div>
        </div>

        <div className='center'>
          <div className='title cruise-hdr-details'>
            Luggage Status
          </div>
        </div>
      </div>

    )
  }
}

export default StatusHeader
