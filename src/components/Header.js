import React from 'react'
import { Link } from 'react-router'
import { Router, Route, IndexRoute, browserHistory, Redirect, useRouterHistory} from 'react-router';

// The Header creates links that can be used to navigate
// between routes.
export default class Header extends React.Component {
	constructor (props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(date) {
    localStorage.clear();
    console.log(localStorage.getItem('response'))
    browserHistory.push('/')
  }
  
	render () {
    return (
  		<header className="clearfix col-md-12 outer-header-box">
        <div className="col-md-4 pull-left">
          <h1 className="logo"><a href="#">Built.io Application</a></h1>
        </div>
        <div className="col-md-2 pull-right">          
            <div className="login-outer-box">
              <img src={this.props.dataimg} className="media-object admin-img"/>
              <h4 className="media-heading">{this.props.dataname}</h4>
              <div className="dropdown">
                <button type="button" data-toggle="dropdown">
                <span className="caret"></span></button>
                <ul className="dropdown-menu">
                  <li><button onClick={this.handleChange}>Logout</button></li>
                </ul>
              </div>
            </div>
        </div>
        
      	{/*<nav className="clearfix">
        	<div className="nav-item">
          	<Link to="/">Home</Link>
        	</div>
        	<div className="nav-item">
          	<Link to="/about">About</Link>
        	</div>
          <div className="nav-item">
            <Link to="/">Login</Link>
          </div>
      	</nav>*/}
    </header>
  	);
}
}
