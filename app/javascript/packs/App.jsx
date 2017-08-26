import React from 'react'
import ReactDOM from 'react-dom'
import Button from './button'
// import qrReader from './qrReader'
// import styles from './assets/stylesheets/pages'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <div>
      <Button />
      {/* <qrReader /> */}
    </div>,
    document.getElementById('main')
  )
})
