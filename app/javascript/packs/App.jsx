import React from 'react'
import ReactDOM from 'react-dom'
import GuestPage from './guest_page'
import AdminPage from './admin_page'
import GuestStatus from './guestStatus'

import { BrowserRouter, Switch, Route } from 'react-router-dom'


// import qrReader from './qrReader'
// import styles from './assets/stylesheets/pages'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={GuestPage} />
        <Route path='/admin' component={AdminPage} />
        <Route path='/guest' component={GuestStatus} />
      </Switch>
    </BrowserRouter>,
    document.getElementById('main')
  )
})
