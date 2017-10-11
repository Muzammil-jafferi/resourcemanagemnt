import React from 'react'
import { Link } from 'react-router'
import Calendar from './CalenderComponent'

export default class userSubHeadComponent extends React.Component {
  constructor(props) {
    super(props)
   // this.state = { isModalOpen: false }
  }
  render () {
    return (
      <div className = "col-md-12 outer-subheader-box">
        <div className = "col-md-4 subhead-pad">
        <h2> Total <p> 45:00 hrs </p> </h2>
        <h2> Project <p> 30:00 hrs </p> </h2>
        <h2> Learning <p> 15:00 hrs </p> </h2>
          {/*<center>
            <input type="submit" value="Project" />
            <button type="button" className="btn btn-default btn-sm remove-border" data-toggle="modal" data-target="#myModal">
              <span className="glyphicon glyphicon-plus"></span>
            </button>
          </center>*/}
        </div>
        <div className = "col-md-4" >
          <span> Choose Date : <Calendar /> </span>
        </div>
        <div className = "col-md-4 subhead-pad">
          <input type="text" placeholder="search" />
        </div>
        </div>
    )
  }
}