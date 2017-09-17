import React from 'react'
import ReactDOM from 'react-dom'
// import GuestPage from './guest_page'
// import GuestStatus from './guestStatus'
import GuestWrapper from './guest_wrapper'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import styles from './assets/stylesheets/pages'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={GuestWrapper} />
        {/* <Route exact path='/guest' component={GuestPage} />
        <Route path='/guest/:id' component={GuestStatus} /> */}
      </Switch>
    </BrowserRouter>,
    document.body.appendChild(document.createElement('div'))
  )
})
