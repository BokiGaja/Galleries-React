import React, {Component} from 'react';
import classes from './App.css';
import Navigation from './layouts/Navigation/Navigation'
import {Switch, Route, Redirect} from "react-router"
import {connect} from "react-redux";

import AllGalleries from './views/AllGalleries/AllGalleries'
import MyGalleries from './views/MyGalleries/MyGalleries'
import NewGallery from './views/NewGallery'
import Login from './views/Login/Login'
import Register from './views/Register/Register'
import SingleGallery from './views/SingleGallery/SingleGallery'
import EditGallery from './views/EditGallery'

const app = props => (
  <div className={classes.App}>
    <Navigation/>
    <Switch>
      {props.loggedIn && <Route key="authors" path="/authors/:id" component={MyGalleries}/>}
      <Route key="singleGallery" path="/galleries/:id" component={SingleGallery}/>
      {props.loggedIn && <Route key="editing" path="/edit-gallery/:id" component={EditGallery}/>}
      {props.loggedIn && <Route key="myGalleries" path="/myGalleries" component={MyGalleries}/>}
      <Route path="/allGalleries" component={AllGalleries} exact/>
      {props.loggedIn && <Route key="creating" path="/create" component={NewGallery}/>}
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
      <Redirect from="*" to="/allGalleries"/>
    </Switch>
  </div>
)

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.loggedIn
  }
};

export default connect(mapStateToProps)(app);
