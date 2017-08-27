import React, { Component } from 'react'
import StatusHeader from './status_header'
import Footer from './footer'
// import footerIcons from './images/footer-icons.png'
import camelImg from './images/lady_on_camel.jpg'
import dawnImg from './images/Terrace_Dawn.jpg'

class GuestStatus extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: 'Tyrion Lannister',
      luggageStatus: 'In Transit'
    }
  }
  render () {
    // this.props.match.params.id
    //var image_path = require()
    return (
      <div className='trd-tablet-header-base'>
        <StatusHeader />
        <br />
        <div className='head-line'>Welcome aboard the Viking Ra,
          <br />
          {this.state.name}!
        </div>
        <div className='center lrg'>
          Luggage Status is..
          <br />
        </div>
        <div className='trd-status'>
          <strong> In Transit </strong>
        </div>
        <br />
        <p className='center'>
          <strong>Keep this page open </strong> your status will update automatically.
        </p>
        <br />
        <hr />
        <h4> In the mean time...</h4>

        <div className='copy-block-container center'>
          <img src={dawnImg} className='center' />
          <br />
          <p>Join us in the Lounge and sample some great food and drinks while you enjoy the view on the open-air Acquavit Terrace</p>
          <a href='' className='floatRight'>Book a Tour</a>
        </div>
        <div className='copy-block-container center'>
          <img src={camelImg} className='center-block' />
          <br />
          <p>Head to the Nile’s west bank to visit the Valley of the Kings, where ancient pharaohs were entombed deep in the hillsides, and the Valley of the Queens, resting place of pharaohs’ wives.</p>
          <a href='' className='floatRight'>Book a Tour</a>
        </div>
        <div className='copy-block-container'>
          <iframe src='https://www.google.com/maps/d/u/2/embed?mid=1WG-bXCjOxg9NptUoVaQ9X6r-eNg' width='100%' height='480'></iframe>
          <br />
          <p>Or plan some exploring on your own.  Here is a map of interesting sights and places to eat and drink.</p>
        </div>

        <Footer />
      </div>

    )
  }
}

export default GuestStatus
