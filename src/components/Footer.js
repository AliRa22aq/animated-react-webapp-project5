import React from 'react'
import '../App.css';
import { Grid } from '@material-ui/core';
import UseAnimations from "react-useanimations";
import github from 'react-useanimations/lib/github';
import facebook from 'react-useanimations/lib/facebook';
import linkedin from 'react-useanimations/lib/linkedin';
import twitter from 'react-useanimations/lib/twitter';


function Footer() {

    return (
        <div  className='footer'>
            <Grid container>

                <Grid item xs={4}> </Grid>

                <Grid item xs={1}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <a href="https://www.facebook.com/AliRa22aQ/">
                            <UseAnimations animation={facebook} size={56} />
                        </a>
                    </div>
                </Grid>

                <Grid item xs={1}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <a href="https://www.linkedin.com/in/alirazzaquet" name='LinkedIn'>
                            <UseAnimations animation={linkedin} size={56} />
                        </a>
                    </div>
                </Grid>

                <Grid item xs={1}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <a href="https://github.com/AliRa22aq">
                            <UseAnimations animation={github} size={56} />
                        </a>
                    </div>
                </Grid>

                <Grid item xs={1}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <a href="https://twitter.com/AliRa22aq">
                            <UseAnimations animation={twitter} size={56} />
                        </a>
                    </div>
                </Grid>

                <Grid item xs={4}>  </Grid>

            </Grid>

           
        </div>
    
    )
}

export default Footer