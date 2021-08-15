import { Link } from "react-router-dom";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'


import React from 'react';
import '../styles/navbar.css'

//Need to figure out why this constantly redirects when put into the tool bar
//<Grid item><Link to= {window.location.href = 'https://github.com/TaylorFurman/reactrobotron'}></Link>Github</Grid>//
function NavBar(props){
  return(
    <div className="navBar">
        <AppBar position = 'relative'>
            <Toolbar>
                <Grid container spacing={6} direction="row" justifyContent="center" alignItems="center">
                    <Grid item><Link to="/" style={{textDecoration: 'none', color: "white"}}> <Typography variant='h4' noWrap>Home</Typography></Link></Grid> 
                    <Grid item><Link to="/leaderboard" style={{textDecoration: 'none', color: "white"}}><Typography variant='h4' noWrap>Leaderboard</Typography></Link></Grid>
                    
                </Grid>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default NavBar;