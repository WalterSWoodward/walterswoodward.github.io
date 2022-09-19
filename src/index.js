import React from 'react';
import ReactDOM from 'react-dom';
import "./css/index.css";

import App from './App.js';
import { Provider } from 'react-redux';
import { applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducers'

import thunk from 'redux-thunk';

if (process.env.NODE_ENV === "production") {
    console.log = function(){}; 
}

const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);