import React, { Component } from 'react'  
import PropTypes from 'prop-types'

class GuestStatus extends React.Component {
  constructor(props) {
    super(props);
  }

  static propTypes = { name: this.props.name };

  render () {


    return (
      <div className='trd-tablet-header-base'>
         
       <p>Welcome aboard the Viking Ra,
           <br/>
             Your luggage is being taken care of by our capable bell staff.  Keep this page open to track the status of your bags.</p>

        <div className='center'>
            <img src="../assets/footer-icons.png" width="320px"/>
        </div>
      </div>

    )
  }
}

export default GuestStatus