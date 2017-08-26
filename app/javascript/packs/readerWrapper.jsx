import React from 'react'
import ReactDOM from 'react-dom'
import qrReader from './qrReader'
// import styles from './assets/stylesheets/pages'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <div>
      <h1> Ryma QR Reader </h1>
      <qrReader />
    </div>,
    document.body.appendChild(document.createElement('div'))
  )
})
