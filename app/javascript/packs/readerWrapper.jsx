import React from 'react'
import ReactDOM from 'react-dom'
import qrReader from './qrReader'
import LegacyModeExample from './legacy_example'
// import styles from './assets/stylesheets/pages'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <div>
      <div className='row'>
        <qrReader />
        <LegacyModeExample />
      </div>
      <img src='./logo.png' />
    </div>,
    document.body.appendChild(document.createElement('div'))
  )
})
