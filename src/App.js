import React, {Component} from 'react';
import classes from './App.css';
import Navigation from './layouts/Navigation/Navigation'
import {Switch, Route, Redirect} from "react-router"
import AllGalleries from './views/AllGalleries/AllGalleries'
import MyGalleries from './views/MyGalleries/MyGalleries'
import NewGallery from './views/NewGallery'
import Login from './views/Login/Login'
import Register from './views/Register/Register'
import SingleGallery from './views/SingleGallery/SingleGallery'
import EditGallery from './views/EditGallery'

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Navigation/>
        <Switch>
          <Route key="authors" path="/authors/:id" component={MyGalleries}/>
          <Route key="singleGallery" path="/galleries/:id" component={SingleGallery}/>
          <Route key="editing" path="/edit-gallery/:id" component={EditGallery}/>
          <Route key="myGalleries" path="/myGalleries" component={MyGalleries}/>
          <Route path="/allGalleries" component={AllGalleries} exact/>
          <Route key="creating" path="/create" component={NewGallery}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Redirect from="*" to="/allGalleries"/>
        </Switch>
      </div>
    );
  }
}

export default App;
