import React from 'react'
import classes from './GalleryLinks.css'
import {NavLink} from "react-router-dom";
import logo from '../../../assets/logo.png'

const galleryLinks = () => (
  <div className={classes.galleryLinks}>
    <img src={logo} alt="logo" className={classes.logo}/>
    <div className={classes.navBox}>
      <NavLink activeClassName={classes.active} className={['nav-link', classes.navLink].join(' ')} to="/allGalleries" exact>All Galleries</NavLink>
    </div>
    <div className={classes.navBox}>
      <NavLink activeClassName={classes.active} className={['nav-link', classes.navLink].join(' ')} to="/myGalleries">My Galleries</NavLink>
    </div>
    <div className={classes.navBox}>
      <NavLink activeClassName={classes.active} className={['nav-link', classes.navLink].join(' ')} to="/create">Create New Gallery</NavLink>
    </div>
  </div>
);

export default galleryLinks;