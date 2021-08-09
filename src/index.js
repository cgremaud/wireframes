import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
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

