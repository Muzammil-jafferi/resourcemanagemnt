import React, { Component } from 'react';
import { Link } from 'react-router'
import { Router, Route, IndexRoute, browserHistory, Redirect, useRouterHistory} from 'react-router';


export default class UsercontentComponent extends React.Component {
	constructor (props) {
    super(props);
  }
  render () {
    return (
      <div className = "col-md-12 dash-align table-responsive">
      <table className="table">
      <thead>
        <tr>
          <th>Projects</th>
          <th>Last Updates</th>
          <th>Sun</th>
          <th>Mon</th>
          <th>Tue</th>
          <th>Wed</th>
          <th>Thurs</th>
          <th>Fri</th>
          <th>Sat</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr data-toggle="collapse" data-target=".order1">
          <td colSpan="2">
                <p> &gt; 
                <button type="button" className="project-icon close" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
                 Elastic </p>    
          </td>
          <td></td>
          <td>6.00</td>
          <td>6.00</td>
          <td>6.00</td>
          <td>6.00</td>
          <td>6.00</td>
          <td>-</td>
          <td>30.0</td>
        </tr>
        <tr className="collapse order1">
          <td><div className ="pad"><p>Project Hours</p></div> </td>
          <td>April 10,2017</td>
          <td><input type="text" placeholder= "" /></td>
          <td><input type="text" placeholder= "3.00 hrs" /></td>
          <td><input type="text" placeholder= "3.00 hrs" /></td>
          <td><input type="text" placeholder= "3.00 hrs" /></td>
          <td><input type="text" placeholder= "3.00 hrs" /></td>
          <td><input type="text" placeholder= "3.00 hrs" /></td>
          <td><input type="text" placeholder= "0.00 hrs" /></td>
          <td>15.0</td>
        </tr>
        <tr className="collapse order1">
          <td><div className ="pad"><p>Learning Hours</p> </div> </td>
          <td>April 10,2017</td>
          <td><input type="text" placeholder= "" /></td>
          <td><input type="text" placeholder= "3.00 hrs" /></td>
          <td><input type="text" placeholder= "3.00 hrs" /></td>
          <td><input type="text" placeholder= "3.00 hrs" /></td>
          <td><input type="text" placeholder= "3.00 hrs" /></td>
          <td><input type="text" placeholder= "3.00 hrs" /></td>
          <td><input type="text" placeholder= "0.00 hrs" /></td>
          <td>15.0</td>
        </tr>
        <tr data-toggle="collapse" data-target=".order2">
          <td colSpan="2"><p> &gt; 
                <button type="button" className="project-icon close" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
                 RMS</p></td>
          <td></td>
          <td>6.00</td>
          <td>6.00</td>
          <td>6.00</td>
          <td>6.00</td>
          <td>6.00</td>
          <td>-</td>
          <td>30.0</td>
        </tr>
      <tr className="collapse order2">
          <td>2</td>
          <td></td>
          <td>Item</td>
          <td>$12.27</td>
        </tr>
        <tr className="collapse order2">
          <td>2</td>
          <td></td>
          <td>Item</td>
          <td>$62.27</td>
        </tr>
        <tr>
         <td colSpan="2"><p> &gt; 
                <button type="button" className="project-icon close" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
                 VMware</p></td>
         <td></td>
          <td>6.00</td>
          <td>6.00</td>
          <td>6.00</td>
          <td>6.00</td>
          <td>6.00</td>
          <td>-</td>
          <td>30.0</td>
        </tr>
      </tbody>
    </table>
      </div>
    );
  }
}