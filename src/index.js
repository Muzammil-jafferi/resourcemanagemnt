// import React from 'react';
// import ReactDOM from 'react-dom';
// import app from './components/app'
// import {
//   Router, 
//   Route, 
//   Link, 
//   IndexRoute, 
//   browserHistory }
// from 'react-router';


// ReactDOM.render((
//   <Router history={browserHistory}>
//     <Route name="/" component={app}>
//       <IndexRoute component={HomeComponent} />
//       <Route name="/dashboard" component={Dashboard} />
//     </Route>
//   </Router>
// ), document.getElementById('app'));


// import React from 'react'
// import { BrowserRouter as Router, Route } from 'react-router-dom'
// import { render } from 'react-dom'
// import { configureStore } from './store'
// import App from './containers/App'
// import Main from './containers/Main'
// import First from './containers/First'

// const store = configureStore()

//  ReactDOM.render(
//     <Router>
//       <Route path='/' component={HomeComponent} />
//       <Route path='/dashboard' component={Dashboard} />
//     </Router>,
//   document.getElementById('app')
// )


// ReactDOM.render(
//   <HomeComponent />,
//   document.getElementById('app')
// );



// import React from 'react'
// import { render } from 'react-dom'
// import { BrowserRouter } from 'react-router-dom'
// import App from './components/App';
// import HomeComponent from './components/HomeComponent';

// render((
//   <BrowserRouter>
//     <ma />
//   </BrowserRouter>
// ), document.getElementById('app'));

// import ReactDOM from 'react-dom';
// import routes from './Main';
// import { Router, Route, IndexRoute, browserHistory} from 'react-router';
// ReactDOM.render(routes, document.getElementById('app'));

import ReactDOM from 'react-dom';
import routes from './routes';

ReactDOM.render(routes, document.getElementById('app'));