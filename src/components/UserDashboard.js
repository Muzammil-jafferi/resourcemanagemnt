import React, { Component } from 'react';
import Header from './Header';
import UserSubHeader from './userSubHeadComponent';
import UserContent from './UsercontentComponent';
import { Router, Route, IndexRoute, browserHistory, Redirect, useRouterHistory} from 'react-router';

export default class Dashboard extends React.Component {
	constructor (props) {
    super(props);
  }
 
  render () {
    var data = JSON.parse(localStorage.getItem('response'))
    console.log("data",data.email)
    return (
      <div>
          <Header dataname = {data.name} dataimg = {data.imageUrl}/>
          <UserSubHeader />
          <UserContent />
      </div>
    );
  }
}