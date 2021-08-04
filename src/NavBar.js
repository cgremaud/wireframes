import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import "./NavBar.css"
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

export function NavBar() {
    return (
    <nav className="navBar" align="center">
    <span className="row" align="center">
        <span className="col-3" align="left"><Button variant="contained" color="primary" className="btn btn-info "><Link to="/">Home</Link></Button> </span>
        <span className="col-1" align="center">
            <Button className="btn btn-info" variant="contained" color="primary"><Link to="/my-haves">My Haves</Link> </Button>
        </span>
        <span className="col-1">
            <Button  variant="contained" color="primary" className="btn btn-info"><Link to="/my-needs">My Needs</Link></Button>   
        </span>
        <span className="col-1" align="right">
            <Button className="btn btn-info" variant="contained" color="primary"><Link to="search">Search</Link> </Button>
        </span>
      
        <span className="col-3" align="right"><Button variant="contained" color="primary" className="btn btn-info"><Link to="/profile">Profile</Link></Button></span>
    </span>
    </nav>
    )
}