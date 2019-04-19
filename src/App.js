import React, { Component } from 'react';
import classes from './App.css';
import Navigation from './layouts/Navigation/Navigation'

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Navigation/>
      </div>
    );
  }
}

export default App;