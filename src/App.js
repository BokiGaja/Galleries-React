import React, { Component } from 'react';
import classes from './App.css';
import Navigation from './layouts/Navigation/Navigation'
import {Switch, Route, Redirect} from "react-router"
import AllGalleries from './views/AllGalleries/AllGalleries'
import MyGalleries from './views/MyGalleries/MyGalleries'
import NewGallery from './views/NewGallery/NewGallery'
import Login from './views/Login/Login'
import Register from './views/Register/Register'
import SingleGallery from './views/SingleGallery/SingleGallery'

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Navigation/>
        <Switch>
          <Route key="authors" path="/authors/:id" component={MyGalleries}/>
          <Route path="/galleries/:id" component={SingleGallery}/>
          <Route key="user" path="/myGalleries" component={MyGalleries}/>
          <Route path="/allGalleries" component={AllGalleries} exact/>
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
