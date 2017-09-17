import React, { Component } from 'react'
import GuestPage from './guest_page'
import GuestStatus from './guestStatus'

class GuestWrapper extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      result: ''
    }
  }

  render () {
    return (
      <div>
        <GuestPage />
        <GuestStatus />
      </div>
    )
  }
}

export default GuestWrapper
