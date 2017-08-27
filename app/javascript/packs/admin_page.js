import React, { Component } from 'react'
import AdminQRScanner from './qr_guest_scan'
import AdminHeader from './admin_header'

class AdminPage extends React.Component {
  
  render () {
    //var image_path = require()
    return (
      <div className='trd-tablet-header-base'>
        <AdminHeader />
        <AdminQRScanner />
      </div>

    )
  }
}

export default AdminPage
