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
      bags: false
    }
    jsonFetch('/api/guests/' + this.state.reservation + '.json', {
      method: 'GET'
    })
    .then(response => this.setState({ first: response.body.first, last: response.body.last, room: response.body.roomnumber, bags: response.body.bagstatus }))
    .catch(err => console.log(err.name, err.message))
  }

  render () {
    return (
      <div className='trd-tablet-header-base center'>
        <AdminHeader />
        <h3 className='center'> Passenger {this.state.first} {this.state.last} bag status updated to
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

export default AdminStatus
