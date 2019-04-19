import React from 'react'
import classes from './AuthLinks.css'
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

import {authService} from "../../../services/AuthService";
import * as actions from '../../../store/Auth/authActions'

const authLinks = props => {
  const logout = async () => {
    await authService.logout(props.token);
    props.onLogoutHandler();
    props.history.push('/');
  };
  return (
    <div className={classes.authLinks}>
      {!props.loggedIn ?
        <div>
          <div className={classes.authBox}>
            <NavLink activeClassName={classes.active} className={['nav-link', classes.navLink].join(' ')}
                     to="/login">Login</NavLink>
          </div>
          <div className={classes.authBox}>
            <NavLink activeClassName={classes.active} className={['nav-link', classes.navLink].join(' ')}
                     to="/register">Register</NavLink>
          </div>
        </div>
        :
        <div className={classes.authBox}>
          <button className="btn btn-outline-info btn-rounded waves-effect" onClick={logout}>Logout</button>
        </div>
      }
    </div>
  )
};


const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn,
    token: state.token
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onLogoutHandler: () => dispatch({type: actions.LOGOUT})
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(authLinks));

