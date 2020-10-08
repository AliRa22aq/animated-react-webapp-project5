import React from 'react'
import {Grid} from "@material-ui/core"
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";


function Header() {
    return (
        <div class='header' >
        <Grid container>
            <Grid item xs={2} > <Link to="/"> 
            <img 
            src="https://i2.wp.com/freepngimages.com/wp-content/uploads/2016/10/harrods-logo.png?fit=895%2C543"
            alt = "Logo"
            height="70px"
            width="110px"
            /> </Link> </Grid> 
            <Grid item xs={6} > </Grid> 
            
                <Grid item xs={1} >
                  <Link to="/"> 
                    <motion.button className= 'button' whileHover={{ scale: 1.2, transition: { duration: 0.3 } }} whileTap={{ scale: 0.9 }}>
                    Home 
                    </motion.button>
                  </Link>
                </Grid> 

                <Grid item xs={1} >
                    <Link to="/Extra">
                        <motion.button className='button' whileHover={{ scale: 1.2, transition: { duration: 0.3 } }} whileTap={{ scale: 0.9 }}>
                            Services
                        </motion.button>
                    </Link>
                </Grid> 
                
                <Grid item xs={1} >
                    <Link to='/More'> 
                        <motion.button className='button' whileHover={{ scale: 1.2, transition: { duration: 0.3 } }} whileTap={{ scale: 0.9 }}>
                            More
                        </motion.button>
                    </Link>
                </Grid> 
               
                <Grid item xs={1} >
                    <Link to='/Contact'>
                        <motion.button className= 'button' whileHover={{ scale: 1.2, transition: { duration: 0.3 } }} whileTap={{ scale: 0.9 }}>
                            Contact 
                        </motion.button>
                    </Link> 
                </Grid> 

        </Grid>
            
        </div>
    )
}

export default Header
