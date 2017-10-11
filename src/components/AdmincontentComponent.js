import React, { Component } from 'react';
import { Link } from 'react-router'
import { Router, Route, IndexRoute, browserHistory, Redirect, useRouterHistory} from 'react-router';


export default class AdmincontentComponent extends React.Component {
	constructor (props) {
    super(props);
  }
  render () {
    return (
      <div className = "col-md-12 dash-align">
          <table className="table">
      <thead>
        <tr>
          <th>Projects</th>
          <th>Last Updates</th>
          <th>Total Utilization</th>
          <th>Project Hours</th>
          <th>Learning Hours</th>
        </tr>
      </thead>
      <tbody>
        <tr data-toggle="collapse" data-target=".order1">
          <td colSpan="2">
                <p> &gt; 
                <button type="button" className="project-icon close" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
                 Elastic</p>
              
          </td>
          {/*<td></td>*/}
          <td>20.0</td>
          <td>10.0</td>
          <td>5.0</td>
        </tr>
        <tr className="collapse order1">
          <td><div className ="pad"><p>Sayali Joshi</p> <p><img className = "img-align" src = "/images/yellow-box.png" /> UI Developer </p></div> </td>
          <td>April 10,2017</td>
          <td>10.0</td>
          <td>5.0</td>
          <td>5.0</td>
        </tr>
        <tr className="collapse order1">
          <td><div className ="pad"><p>Vikrant Raut</p> <p><img className = "img-align" src = "/images/blue-box.png" /> Backend Developer </p></div> </td>
          <td>April 10,2017</td>
          <td>10.0</td>
          <td>5.0</td>
          <td>5.0</td>
        </tr>
        <tr data-toggle="collapse" data-target=".order2">
          <td colSpan="2"><p> &gt; 
                <button type="button" className="project-icon close" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
                 RMS</p></td>
          {/*<td></td>*/}
          <td>20.0</td>
          <td>10.0</td>
          <td>5.0</td>
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
          {/*<td></td>*/}
          <td>20.0</td>
          <td>10.0</td>
          <td>5.0</td>
        </tr>
      </tbody>
    </table>
      </div>
    );
  }
}