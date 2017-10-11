import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import Dashboard from './Dashboard';
//import { browserHistory } from 'react-router';
// import { browserHistory } from 'react-router';
// import { BrowserRouter as Router } from 'react-router-dom'
// import { Redirect } from 'react-router'
import createHashHistory from 'history/lib/createHashHistory';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import { Router, Route, IndexRoute, browserHistory, Redirect, useRouterHistory} from 'react-router';

const history  = createBrowserHistory()

export default class HomeComponent extends React.Component {
	constructor (props) {
    super(props);
  }

	responseGoogle (response) {
		localStorage.setItem('response', JSON.stringify(response.profileObj));
  	browserHistory.push('/dashboard')
  	// this.props.router.push('/dashboard');
  	console.log(response);
  	console.log(response.profileObj.name);
  	console.log(response.profileObj.imageUrl);
	} 

 	// isLogin(){
  //  var item = localStorage.getItem('response')
  //  console.log(item)
 	// }

  render () {
    return (
      <div>

       <h1>Login Page</h1>

      <GoogleLogin
    		clientId="683068357523-cfn5pnv4fcblvth2bdue3oph8h8bvqg0.apps.googleusercontent.com"
  			buttonText="Login"
  			onSuccess={this.responseGoogle}
  			onFailure={this.responseGoogle}
  		/>
  		
      </div>
    );
  }
}
