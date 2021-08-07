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
    
    //WHY ISN'T THIS AWAITING THE FETCH??? 
    const fetchUser = async () => { 

        let response = await fetch(`https://api.github.com/users/cgremaud`)
        console.log(JSON.stringify(user))
        return await response.json()
        
    }

    useEffect(()=> {  
        fetchUser().then((data) => setUser(data))
    }, [])



    return(

    <Paper className="paper">
        <div className="row home">
        <span className="col-1"></span>
          <div className="col-10" align="center"> 
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
            <span className="col-1"></span>
        </div>
    </Paper>
    )
}