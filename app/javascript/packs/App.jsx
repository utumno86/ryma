import React from 'react'
import ReactDOM from 'react-dom'
import GuestPage from './guests/guest_page'
import AdminPage from './admin/admin_page'
import GuestStatus from './guests/guestStatus'
import AdminStatus from './admin/admin_status'
// import Fetch from 'react-fetch'
// import GuestWrapper from './guest_wrapper'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

// import qrReader from './qrReader'
// import styles from './assets/stylesheets/pages'

document.addEventListener('DOMContentLoaded', () => {

  ReactDOM.render(
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={GuestPage} />
        <Route path='/admin' component={AdminPage} />
        <Route path='/guests/:id' component={GuestStatus} />
        <Route path='/admin-status/:id' component={AdminStatus} />
      </Switch>
    </BrowserRouter>,
    document.getElementById('main')
  )
})
