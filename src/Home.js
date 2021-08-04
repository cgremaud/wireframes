import React, { useState, useEffect } from "react";
import "./Home.css"
import Paper from '@material-ui/core/Paper';

export function Home() {

    return(
        <div className="row home">
          <div className="col-4" align="center">  
            <ul>
                <li>one</li>
                <li>two</li>
                <li>three</li>
            </ul>
            <Paper className="card">Text</Paper>
        
          </div>
          
        </div>
    )
}