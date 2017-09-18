import React, { Component } from 'react'
import StatusHeader from './status_header'
import Footer from './footer'
import GuestBags from './guestBags'
// import footerIcons from './images/footer-icons.png'
import camelImg from '../images/lady_on_camel.jpg'
import dawnImg from '../images/Terrace_Dawn.jpg'
import jsonFetch from 'json-fetch'

class GuestStatus extends React.Component {
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
      <div className='trd-tablet-header-base'>
        <StatusHeader />
        <br />
        <div className='head-line text-center'>Welcome aboard the Viking Ra,
          <br />
          {this.state.first} {this.state.last}!
          <br />
          {/* Reservation number: {this.state.reservation}
          <br /> */}
          Room number: {this.state.room}
        </div>
        <div className='center lrg'>
          Luggage Status is..
          <br />
        </div>
        <GuestBags />
        <br />
        <p className='center'>
          <strong>Keep this page open </strong> your status will update automatically.
        </p>
        <br />
        <hr />
        <h4> In the mean time...</h4>

        <div className='copy-block-container center'>
          <img src={dawnImg} className='center imgWidth' />
          <br />
          <p>Join us in the Lounge and sample some great food and drinks while you enjoy the view on the open-air Acquavit Terrace</p>
          <a href='' className='floatRight'>Book a Tour</a>
        </div>
        <div className='copy-block-container center'>
          <img src={camelImg} className='center-block imgWidth' />
          <br />
          <p>Head to the Nile’s west bank to visit the Valley of the Kings, where ancient pharaohs were entombed deep in the hillsides, and the Valley of the Queens, resting place of pharaohs’ wives.</p>
          <a href='' className='floatRight'>Book a Tour</a>
        </div>
        <div className='copy-block-container'>
          <iframe src='https://www.google.com/maps/d/u/2/embed?mid=1WG-bXCjOxg9NptUoVaQ9X6r-eNg' width='100%' height='480' />
          <br />
          <p>Or plan some exploring on your own.  Here is a map of interesting sights and places to eat and drink.</p>
        </div>

        <Footer />
      </div>

    )
  }
}

export default GuestStatus
