import React, { Component } from 'react'
// import ReactDOM from 'react-dom'
import QrReader from 'react-qr-reader'

// import styles from './assets/stylesheets/pages'
class qrReader extends Component {
  constructor (props) {
    super(props)
    this.state = {
      delay: 100,
      result: 'No result'
    }

    this.handleScan = this.handleScan.bind(this)
    this.openImageDialog = this.openImageDialog.bind(this)
  }
  handleScan (result) {
    if (result) {
      this.setState({ result })
    }
  }

  // handleScan (data) {
  //   this.setState({
  //     result: data
  //   })
  // }
  handleError (err) {
    console.error(err)
  }
  openImageDialog () {
    this.refs.qrReader1.openImageDialog()
  }

  render () {
    const previewStyle = {
      height: 240,
      width: 320
    }

    return (
      <div>
        <QrReader
          ref='qrReader'
          delay={this.state.delay}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
          legacyMode />
        <input type='button' value='Submit QR Code' onClick={this.openImageDialog} />
        <p>{this.state.result}</p>
      </div>
    )
  }
}

export default qrReader
