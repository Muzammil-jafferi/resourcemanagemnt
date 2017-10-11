import React from 'react';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';
// import {BrowserRouter} from 'react-router-dom'
import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import HomeComponent from './components/HomeComponent';
import Dashboard from './components/Dashboard';
import UserDashboard from './components/UserDashboard';

function requireAuth(nextState, replace, next) {
  var data = JSON.parse(localStorage.getItem('response'))
  console.log("componentWillMount call",data)
  if(!data){
    console.log("no data found")
    replace({
      pathname: "/",
      state: {nextPathname: nextState.location.pathname}
    });
  }
  next();
}

const routes = (
  <Router history={browserHistory}>
	  <Route component={ App }>
	      {/*<Route path='/' component={ Home } />
	      <Route path='/about' component={ About } />*/}
	      <Route path='/' component={ HomeComponent } />
	      <Route path='/dashboard' component={ Dashboard } onEnter={requireAuth}/>
        <Route path='/userdashboard' component={ UserDashboard } onEnter={requireAuth}/>
      </Route>
  </Router>
);

export default routes
