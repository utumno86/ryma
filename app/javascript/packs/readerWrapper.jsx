import React from 'react'
import ReactDOM from 'react-dom'
import qrReader from './qrReader'
import LegacyModeExample from './legacy_example'
// import styles from './assets/stylesheets/pages'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <div>
      <h1> Ryma QR Reader </h1>
      <div className='row'>
        <qrReader />
        <LegacyModeExample />
      </div>
    </div>,
    document.body.appendChild(document.createElement('div'))
  )
})
