import React, { Component } from 'react'
import QrReader from 'react-qr-reader'

class GuestInfo extends Component {
  static propTypes = {
    name: React.PropTypes.string.isRequired,
    room: React.PropTypes.number.isRequired,
    // price: React.PropTypes.number.isRequired
  }

  render () {
    return <div>
      <h3>{this.props.name}</h3>
      <p>{this.props.room}</p>
    </div>
  }
}

export default GuestInfo
