import React from 'react'
import ReactDOM from 'react-dom'
import GuestPage from './guests/guest_page'
import AdminPage from './admin/admin_page'
import GuestStatus from './guests/guestStatus'
import StaffResponse from './admin/staff_response'
import Fetch from 'react-fetch'
// import GuestWrapper from './guest_wrapper'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

// import qrReader from './qrReader'
// import styles from './assets/stylesheets/pages'

document.addEventListener('DOMContentLoaded', () => {

  ReactDOM.render(
    <Fetch url='api/guests'>
      <BrowserRouter>
        <Switch>
          {/* <Route exact path='/' component={GuestWrapper} /> */}
          <Route exact path='/' component={GuestPage} />
          <Route path='/admin' component={AdminPage} />
          <Route path='/guest/:id' component={GuestStatus} />
          <Route path='/staff_response' component={StaffResponse} />
        </Switch>
      </BrowserRouter>
    </Fetch>,
    document.getElementById('main')
  )
})
