import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {NavBar} from "./NavBar";
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from "react-router-dom";
import AppBar from "./AppBar";



ReactDOM.render(
  <Router>
  <div className="container outer-container">
    <AppBar />
    <App />
  </div>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
