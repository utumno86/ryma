import React, { Component } from 'react'
import LegacyModeExample from './qr_guest_scan'
import Header from './header'
import Footer from './footer'

class GuestPage extends React.Component {
  
  render () {
    //var image_path = require()
    return (
      <div className='trd-tablet-header-base'>
        <Header />
        <LegacyModeExample />
        <Footer />
      </div>

    )
  }
}

export default GuestPage
