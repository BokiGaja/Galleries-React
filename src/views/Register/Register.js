import React, {useState} from 'react'
import {withRouter} from "react-router"
import classes from './Register.css'

import {authService} from "../../services/AuthService";
import * as actions from "../../store/Auth/authActionTypes";
import {connect} from "react-redux";

const register = props => {
  const [credentials, setCredentials] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password_confirmation: ''
  });

  const [inputError, setInputError] = useState({
    errorMessage: ''
  });

  const [checked, setChecked] = useState(false);

  const registerAndRedirect = async (event) => {
    event.preventDefault();
    if (checked) {
      try {
        const response = await authService.register({...credentials});
        if (response) {
          setInputError({...inputError, errorMessage: response.error});
        } else {
          console.log('here');
          const login = await authService.login({...credentials});
          localStorage.setItem('token', login.access_token);
          props.onLoginHandler(login.access_token);
          props.history.push('/allGalleries')
        }
      } catch (e) {
        return e;
      }
    }
  };

  return (
    <div style={{height: '100vh', marginTop: '100px'}}>
      <div className={classes.registerPage}>
        <h1 className={classes.registerTitle}>Register</h1>
        <form onSubmit={registerAndRedirect} className="form-group">
          <div>
            <input type="text" placeholder="First name" className={['form-control', classes.registerInput].join(' ')}
                   onChange={event => setCredentials({...credentials, first_name: event.target.value})}/>
          </div>
          <div>
            <input type="text" placeholder="Last Name" className={['form-control', classes.registerInput].join(' ')}
                   onChange={event => setCredentials({...credentials, last_name: event.target.value})}/>
          </div>
          <div>
            <input type="email" placeholder="email" className={['form-control', classes.registerInput].join(' ')}
                   onChange={event => setCredentials({...credentials, email: event.target.value})}/>
          </div>
          <div>
            <input type="password" placeholder="password" className={['form-control', classes.registerInput].join(' ')}
                   onChange={event => setCredentials({...credentials, password: event.target.value})}/>
          </div>
          <div>
            <input type="password" placeholder="Confirm password"
                   className={['form-control', classes.registerInput].join(' ')}
                   onChange={event => setCredentials({...credentials, password_confirmation: event.target.value})}/>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" required
                   onChange={event => setChecked(event.target.value)}/>
            <label className="form-check-label" htmlFor="exampleCheck1">I accept terms and conditions</label>
          </div>
          <button type="submit" className="btn btn-primary" style={{marginTop: '20px'}}>Register</button>
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
    onLoginHandler: token => dispatch({type: actions.LOGIN, token: token})
  }
};

export default connect(null, mapDispatchToProps)(withRouter(register));