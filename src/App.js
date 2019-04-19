import React, { Component } from 'react';
import classes from './App.css';
import Navigation from './layouts/Navigation/Navigation'
import {Switch, Route, Redirect} from "react-router"
import AllGalleries from './views/AllGalleries'
import MyGalleries from './views/MyGalleries'
import NewGallery from './views/NewGallery'
import Login from './views/Login'
import Register from './views/Register'

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Navigation/>
        <Switch>
          <Route path="/allGalleries" component={AllGalleries}/>
          <Route path="/myGalleries" component={MyGalleries}/>
          <Route path="/create" component={NewGallery}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Redirect from="*" to="/allGalleries"/>
        </Switch>
      </div>
    );
  }
}

export default App;
