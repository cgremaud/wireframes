import React, { useState, useEffect } from "react";
import "./Home.css"
import Paper from '@material-ui/core/Paper';
import Card from "@material-ui/core/Card";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

export function Home() {

    return(
    <Paper className="paper">
        <div className="row home">
          <div className="col-12" align="center"> 
          <CardActionArea>
            <Card className="card">
            <CardContent>Text</CardContent>
            </Card>
        </CardActionArea> 
        
          </div>
          
        </div>
    </Paper>
    )
}