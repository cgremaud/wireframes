import React, { useState, useEffect } from "react";
import "./Home.css"
import Paper from '@material-ui/core/Paper';
import Card from "@material-ui/core/Card";

export function Home() {

    return(
    <Paper className="paper">
        <div className="row home">
          <div className="col-4" align="center">  
            <Card className="card">
                Text Lorem ipsum dolor sit amet
            </Card>
            
        
          </div>
          
        </div>
    </Paper>
    )
}