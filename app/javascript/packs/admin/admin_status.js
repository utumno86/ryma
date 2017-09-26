import React, { Component } from 'react'
import AdminHeader from './admin_header'
import jsonFetch from 'json-fetch'

class AdminStatus extends Component {
  constructor (props) {
    super(props)
    this.state = {
      reservation: this.props.match.params.id,
      first: '',
      last: '',
      room: '',
      bags: true
    }
    jsonFetch('/api/guests/' + this.state.reservation + '.json', {
      method: 'PATCH'
    })
    .then(response => this.setState({ first: response.body.first, last: response.body.last, room: response.body.roomnumber, bags: response.body.bagstatus }))
    .catch(err => console.log(err.name, err.message))
  }

  render () {
    return (
      <div className='trd-tablet-header-base center'>
        <AdminHeader />
        <h3 className='center'>
          Reservation: {this.state.reservation}
          <br />
          Passenger: {this.state.first} {this.state.last}
          <br />
          Room: {this.state.room}
          <br />
          <strong>BAGS DELIVERED</strong>
        </h3>
        <button className='btn btn-default cta btn-primary-rivers btn-red' >
          <a href='/admin' >
            <span className='camIcon' />
            <span className='btnText'>Next Reservation</span>
          </a>
        </button>
      </div>
    )
  }
}

export default AdminStatus
