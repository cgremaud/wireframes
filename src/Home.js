import React, { useState, useEffect } from "react";
import "./Home.css"
import Paper from '@material-ui/core/Paper';
import Card from "@material-ui/core/Card";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

export function Home() {
    const [user, setUser] = useState();
    const [isLoaded, setIsLoaded] = useState(false);
    
    
    // WHY ISN'T THIS AWAITING THE FETCH??? 
    // const fetchUser = async () => { 
    //     try {
    //         let response = await fetch(`https://api.github.com/users/cgremaud`)
    //         return await response.json();
    //     } catch(err) {
    //         console.log(err)
    //     }
    // }

    useEffect(()=> {  
         async function fetchUser() {
             const result = await fetch("https://api.github.com/users/cgremaud");
             const json = await result.json();
             setUser(json);
             setIsLoaded(true)
         }
         fetchUser();
        console.log(user) //it's getting the user, just have to let the page render first, then the fetch resolves. . .
    })


if(!isLoaded) {
    return <div>Loading . . .</div>
} else {
    return(

        <Paper className="paper">
            <div className="row home">
            <span className="col-1"></span>
            <div className="col-10" align="center"> 
                    <p><CardActionArea>
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
                    </CardActionArea></p>
                    <p><CardActionArea>
                        <Card variant="outlined" className="card">
                            <CardContent>
                                <Typography variant="h3" align="left">Name</Typography>
                                <Typography variant="subtitle1" align="left">
                                    <ul>
                                        <li>List</li>
                                        <li>List</li>
                                    </ul>
                                </Typography>
                            </CardContent>
                        </Card>
                    </CardActionArea></p> 
                </div>
                <span className="col-1"></span>
            </div>
        </Paper>
        )
    }
}