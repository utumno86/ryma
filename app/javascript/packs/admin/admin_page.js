import React, { Component } from 'react'
import AdminQRScanner from './admin_qr_scanner'
import AdminHeader from './admin_header'

class AdminPage extends Component {
  render () {
    return (
      <div className='trd-tablet-header-base'>
        <AdminHeader />
        <AdminQRScanner history={this.props.history} />
      </div>

    )
  }
}

export default AdminPage
