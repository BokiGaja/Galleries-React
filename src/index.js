import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import {createStore} from "redux"
import {Provider} from 'react-redux'
import axios from 'axios'
import {combineReducers, compose, applyMiddleware} from "redux";
import thunk from 'redux-thunk'

import authReducer from './store/Auth/authReducer'
import galleryReducer from './store/Gallery/galleryReducer'


axios.defaults.headers.common['Authorization'] = `Bearer ` + localStorage.getItem('token');

const rootReducer = combineReducers({auth: authReducer, gallery: galleryReducer});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));


const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
