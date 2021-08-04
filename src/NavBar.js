import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import "./NavBar.css"

export function NavBar() {
    return (
    <nav>
    <span className="row">
        <span className="col-4" align="left"><button className="btn btn-info "><Link to="/">Home</Link></button> </span>
        <span className="col-4" align="center"><button className="btn btn-info"><Link to="/my-haves">My Haves</Link> </button>
        <button className="btn btn-info"><Link to="/my-needs">My Needs</Link></button> </span>
        <span className="col-4" align="right"><button className="btn btn-info"><Link to="/profile">Profile</Link></button></span>
    </span>
    </nav>
    )
}