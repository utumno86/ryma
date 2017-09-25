import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
import SampleQRC from '../images/sampleQRCode.jpg'
import AdminStatus from './admin_status'

class AdminQRScanner extends Component {
  constructor (props) {
    super(props)
    this.state = {
      delay: 100,
      result: '',
      message: 'Bag Status is now Delievered'
    }
    this.handleScan = this.handleScan.bind(this)
    this.openImageDialog = this.openImageDialog.bind(this)
  }
  handleScan (result) {
    if (result) {
      this.setState({ result })
      return <AdminStatus />
      // this.props.history.push('/admin/' + result,
      // {id: result})
    }
  }

  handleError (err) {
    console.error(err)
  }

  openImageDialog () {
    this.refs.qrReader.openImageDialog()
  }

  render () {
    const previewStyle = {
      height: 0,
      width: 0,
      backgroundSize: '100% auto'
    }

    return (
      <div className='center'>
        <p className='header-subtitle'>Please scan Guests' QR Code</p>
        {/* <p>Please scan Guests' QR Code with your phone and we will send a notification when your luggage arrives in your stateroom.</p> */}
        <QrReader
          ref='qrReader'
          delay={this.state.delay}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
          legacyMode
        />
        <img src={SampleQRC} />
        <p>{this.state.result}</p>
        <br />
        <button className='btn btn-default cta btn-primary-rivers btn-red' onClick={this.openImageDialog}>
          <span className='camIcon' />
          <span className='btnText'>Tap to Scan</span>
        </button>
      </div>
    )
  }
}

export default AdminQRScanner
