import React from 'react'
import ReactDOM from 'react-dom'
import Header from './header'
// import qrReader from './qrReader'
// import styles from './assets/stylesheets/pages'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <div>
      <Header />
    </div>,
    document.getElementById('main')
  )
})
