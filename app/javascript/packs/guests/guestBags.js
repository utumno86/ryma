import React, { Component } from 'react'

class GuestBags extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      bags: false
    }
  }

  handleChange (event) {
    if (event) {
      this.setState({ bags: event.currentTarget.value })
    }
  }

  render () {
    return (
      <div className='trd-status'
        onChange={() => this.handleChange()}>
        <strong>
          {this.state.bags === true ? 'Delivered' : 'In Transit'}
        </strong>
      </div>
    )
  }
}

export default GuestBags
