import React from 'react'
import classes from './AuthLinks.css'
import {NavLink} from "react-router-dom";

const authLinks = () => (
  <div className={classes.authLinks}>
    <div className={classes.authBox}>
      <NavLink activeClassName={classes.active} className={['nav-link', classes.navLink].join(' ')} to="/login">Login</NavLink>
    </div>
    <div className={classes.authBox}>
      <NavLink activeClassName={classes.active} className={['nav-link', classes.navLink].join(' ')} to="/register">Register</NavLink>
    </div>
    <div className={classes.authBox}>
      <button className="btn btn-outline-info btn-rounded waves-effect">Logout</button>
    </div>
  </div>
);

export default authLinks;