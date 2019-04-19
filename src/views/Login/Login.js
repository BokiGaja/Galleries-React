import React, {useState} from 'react'
import classes from './Login.css'
import {authService} from "../../services/AuthService";
import {withRouter} from "react-router";
import {connect} from "react-redux";

import * as actions from '../../store/Auth/authActionTypes'


const login = props => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const [inputError, setInputError] = useState({
    errorMessage: ''
  });

  const loginAndRedirect = async (event) => {
    event.preventDefault();
    try {
      const response = await authService.login(credentials);
      if (response.access_token) {
        localStorage.setItem('token', response.access_token);
        props.onLoginHandler(response.access_token, response.user.first_name);
        props.history.push('/allGalleries')
      }
      if (response.error) {
        setInputError({...inputError, errorMessage: response.error});
      }
    } catch (e) {
      return e;
    }
  };
  return (
    <div style={{height: '100vh', marginTop: '150px'}}>
      <div className={classes.loginForm}>
        <h1 className={classes.loginTitle}>Login</h1>
        <form onSubmit={loginAndRedirect} className="form-group">
          <div>
            <input type="email" placeholder="email" className={['form-control', classes.loginInput].join(' ')}
                   onChange={event => setCredentials({...credentials, email: event.target.value})}/>
          </div>
          <div>
            <input type="password" placeholder="password" className={['form-control', classes.loginInput].join(' ')}
                   onChange={event => setCredentials({...credentials, password: event.target.value})}/>
          </div>
          <button type="submit" className="btn btn-primary" style={{marginTop: '20px'}}>Login</button>
        </form>
        {inputError.errorMessage.length > 0 ? <div className="alert alert-danger" role="alert">
          {inputError.errorMessage}
        </div> : null}
      </div>
    </div>
  )
};

const mapDispatchToProps = dispatch => {
  return {
    onLoginHandler: (token, firstName) => dispatch({type: actions.LOGIN, token: token, first_name: firstName})
  }
};

export default connect(null, mapDispatchToProps)(withRouter(login));