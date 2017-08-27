import React, { Component } from 'react'
import AdminHeader from './admin_header'

class StaffResponse extends Component {
  render () {
    return (
      <div className='trd-tablet-header-base center'>
        <AdminHeader />
        <h3 className='center'> Passenger bag status updated to
          <br />
          <strong>DELIVERED</strong>
        </h3>
        <button className='btn btn-default cta btn-primary-rivers btn-red'>
          {/* <span className='camIcon' /> */}
          <span className='btnText'>Next Reservation</span>
        </button>
      </div>
    )
  }
}

export default StaffResponse
