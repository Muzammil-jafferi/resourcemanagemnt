import React, { Component } from 'react';
import { Link } from 'react-router';
import Header from './Header'
import SubHeader from './SubHeaderComponent';

// import Main from './Main'

export default class App extends React.Component {
	constructor (props) {
    super(props);
  }

	render() {
	console.log("this.props",this.props.children)
    
		return ( 
			<div >
	      {this.props.children}	      
			</div>
		);
	}
}
