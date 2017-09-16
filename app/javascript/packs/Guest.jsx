import React from 'react'
import ReactDOM from 'react-dom'
import GuestPage from './guest_page'
// import styles from './assets/stylesheets/pages'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <div>
      <GuestPage />
    </div>,
    document.body.appendChild(document.createElement('div'))
  )
})
