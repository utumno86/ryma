import React, { Component } from 'react'  

class Footer extends React.Component {
  
  render () {
    //var image_path = require()
    return (
      <div className='trd-tablet-header-base'>
        <div className="trd-footer-links-title-container">
					<div className="trd-footer-links-title">
						Connect &amp; Share
					</div>
				</div>

        <div className='center'>
            <img src="../assets/footer-icons.png" width="320px"/>
        </div>
      </div>

    )
  }
}

export default Footer