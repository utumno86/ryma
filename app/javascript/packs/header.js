import React, { Component } from 'react'
// import 'bootstrap/dist/css/bootstrap.css'
// import { Col } from 'react-bootstrap'

class Header extends React.Component {
  render () {
    return (
      <div className="trd-tablet-header-base">
        <div className="trd-body-wrapper">
          <div className="trd-header-logo">
          <img src="../assets/V_logo_h_cruises_2x.png" width="320" alt="Vicking logo"/>
          </div>
        </div>

        <div className="center">
            <div className="title cruise-hdr-details">
              Welcome Aboard
              </div>
          </div>
      </div>

    )
  }
}

export default Header
