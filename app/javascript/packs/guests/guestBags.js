import React, { Component } from 'react'
import jsonFetch from 'json-fetch'

class GuestBags extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      bags: false,
      reservation: this.props.match.params.id
    }
  }

  handleChange (event) {
    if (event) {
      this.setState({ bags: event.currentTarget.value })
    }
  }

  // componentDidMount () {
  //   setInterval(() => this.setState(
  //     jsonFetch('/api/guests/' + this.state.reservation + '.json', {
  //       method: 'GET'
  //     })
  //     .then(response => this.setState({ bags: response.body.bagstatus }))
  //     .catch(err => console.log(err.name, err.message))), 10000)
  //   console.log('mounted')
  //   console.log(this.state.bags)
  // }

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
