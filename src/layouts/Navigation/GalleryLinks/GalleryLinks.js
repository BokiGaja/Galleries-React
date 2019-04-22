import React from 'react'
import classes from './GalleryLinks.css'
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import logo from '../../../assets/logo.png'

const galleryLinks = props => (
  <div className={classes.galleryLinks}>
    <img src={logo} alt="logo" className={classes.logo}/>
    <div className={classes.navBox}>
      <NavLink activeClassName={classes.active} className={['nav-link', classes.navLink].join(' ')} to="/allGalleries"
               exact>All Galleries</NavLink>
    </div>
    {props.loggedIn &&
    <div className={classes.navBox}>
      <NavLink activeClassName={classes.active} className={['nav-link', classes.navLink].join(' ')} to="/myGalleries">My
        Galleries</NavLink>
    </div>
    }
    {props.loggedIn &&
      <div className={classes.navBox}>
        <NavLink activeClassName={classes.active} className={['nav-link', classes.navLink].join(' ')} to="/create">Create
          New Gallery</NavLink>
      </div>
    }
  </div>
);

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.loggedIn
  }
};

export default connect(mapStateToProps)(galleryLinks)