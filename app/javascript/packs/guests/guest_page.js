import React, { Component } from 'react'
import QrcReader from './QrcReader'
import Header from './header'
import Footer from './footer'

class GuestPage extends Component {
  render () {
    return (
      <div className='trd-tablet-header-base'>
        <Header />
        <QrcReader history={this.props.history} />
        <Footer />
      </div>

    )
  }
}

export default GuestPage
