import React, { Component } from 'react'
import footerIcons from '../images/footer-icons.png'

class Footer extends React.Component {

  render () {
    //var image_path = require()
    return (
      <div className='trd-tablet-header-base'>
        <div className='trd-footer-links-title-container'>
          <div className='trd-footer-links-title'>
            Connect &amp; Share
          </div>
        </div>
        <div className='center'>
          <img src={footerIcons} width='320px' />
        </div>
      </div>

    )
  }
}

export default Footer
