import React from 'react';
import { motion } from "framer-motion";
import { Carousel } from 'react-bootstrap';
import Grid from '@material-ui/core/Grid';


const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }


const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  }

const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.5,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      }
    }
}
function Home() {
    return (
        <div className = 'homeBG'>
            <motion.div initial="hidden" animate="visible" variants={variants}>
                <Grid container> 

                <Grid item xs={6}>
                    <div id="homeText">
                    
                        <motion.ul initial="hidden" animate="visible" variants={list}>
                            <motion.li variants={item}> Statement A </motion.li>
                            <motion.li variants={item}> Statement B </motion.li>
                            <motion.li variants={item}> Statement C </motion.li>
                            <motion.li variants={item}> Statement D </motion.li>

                        </motion.ul>
                    </div>


                </Grid>
               
                <Grid item xs={6} > 
                <Carousel style={{width:"600px", padding: "70px 0px 70px 0px"}}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                
                </Grid>
                
                </Grid>
                

                        
            </motion.div>


        </div>
    )
}

export default Home
