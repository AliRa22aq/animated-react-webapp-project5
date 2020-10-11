import React from 'react'
import {Grid} from "@material-ui/core"
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";



function Header() {
    return (
        <div class='header' >
        <Grid container>
                <Grid item xs={2} >
                    <Link to="/">
                        <motion.div whileHover={{ scale: 1.3, transition: { duration: 0.2 } }}>
                            <img
                                src="https://i2.wp.com/freepngimages.com/wp-content/uploads/2016/10/harrods-logo.png?fit=895%2C543"
                                alt="Logo"
                                height="70px"
                                width="110px"
                            />
                        </motion.div>
                    </Link>
                </Grid> 
            
            <Grid item xs={6} > </Grid> 
            
                <Grid item xs={1} >
                  <Link to="/"> 
                    <motion.button className= 'button' whileHover={{ scale: 1.1, transition: { duration: 0.2 } }} whileTap={{ scale: 1 }}>
                    Home 
                    </motion.button>
                  </Link>
                </Grid> 

                <Grid item xs={1} >
                    <Link to="/Services">
                    <motion.button className= 'button' whileHover={{ scale: 1.1, transition: { duration: 0.2 } }} whileTap={{ scale: 1 }}>
                            Services
                        </motion.button>
                    </Link>
                </Grid> 
                
                <Grid item xs={1} >
                    <Link to='/More'> 
                    <motion.button className= 'button' whileHover={{ scale: 1.1, transition: { duration: 0.2 } }} whileTap={{ scale: 1 }}>
                            More
                        </motion.button>
                    </Link>
                </Grid> 
               
                <Grid item xs={1} >
                    <Link to='/Contact'>
                    <motion.button className= 'button' whileHover={{ scale: 1.1, transition: { duration: 0.2 } }} whileTap={{ scale: 1 }}>
                            Contact 
                        </motion.button>
                    </Link> 
                </Grid> 

        </Grid>
            
        </div>
    )
}

export default Header
