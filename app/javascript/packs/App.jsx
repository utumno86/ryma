import React from 'react'
import ReactDOM from 'react-dom'
import Header from './header'

import LegacyModeExample from './legacy_example'
import Footer from './footer'

// import qrReader from './qrReader'
// import styles from './assets/stylesheets/pages'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <div>
      <Header />
      <LegacyModeExample />
      <Footer />
    </div>,
    document.getElementById('main')
  )
})
