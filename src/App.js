import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customers from './Customers'
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <p>Hello Milan this is React js world!</p>
    );
  }
}

export default App;
