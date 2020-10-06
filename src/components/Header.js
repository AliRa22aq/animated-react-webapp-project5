import React from 'react'
import {Grid} from "@material-ui/core"
import { Routes, Route, Link } from 'react-router-dom';

function Header() {
    return (
        <div class='header' >
        <Grid container>
            <Grid item xs={2} > Logo </Grid> 
            <Grid item xs={6} > </Grid> 
            <Grid item xs={1} className = "menu-btn"> <Link to="/"> Home </Link> </Grid> 
            <Grid item xs={1} className = "menu-btn"> <Link to='/Extra'> Extra </Link> </Grid> 
            <Grid item xs={1} className = "menu-btn"> <Link to='/More'> More </Link> </Grid> 
            <Grid item xs={1} className = "menu-btn"> <Link to='/Contact'> Contact </Link> </Grid> 




        </Grid>
            
        </div>
    )
}

export default Header
