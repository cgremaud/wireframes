import React, { useState, useEffect } from "react";
import "./Home.css"
import Paper from '@material-ui/core/Paper';
import Card from "@material-ui/core/Card";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

export function Home() {
    const [user, setUser] = useState(null);
    

    useEffect(()=> {  
        fetch(`https://api.github.com/users/cgremaud`)
        .then(response => response.json())
        .then(setUser)
        console.log(JSON.stringify(user))
    }, [user])



    return(

    <Paper className="paper">
        <div className="row home">
          <div className="col-12" align="center"> 
          <CardActionArea>
            <Card variant="outlined" className="card">
                <CardContent>
                    <Typography variant="h3" align="left">{user.name}</Typography>
                    <Typography variant="subtitle1" align="left">
                        <ul>
                            <li>List</li>
                            <li>List</li>
                        </ul>
                    </Typography>
                </CardContent>
            </Card>
        </CardActionArea> 
          </div>
        </div>
    </Paper>
    )
}