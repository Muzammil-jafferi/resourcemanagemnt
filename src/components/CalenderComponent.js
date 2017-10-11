import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export default class CalenderComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
    return <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
    />;
  }
}

// import React, { Component } from 'react';
// import DatePicker from 'react-date-picker';

// export default class CalenderComponent extends React.Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       date: new Date()
//     }
//   }

//   onChange(date) {
//     this.setState({ date })
//   } 
 
//   render() {
//     return (
//       <div>
//         <DatePicker
//           onChange={this.onChange}
//         />
//       </div>
//     );
//   }
// }