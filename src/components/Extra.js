import React from 'react'
import '../App.css';
import { motion } from "framer-motion";
import Grid from '@material-ui/core/Grid';


const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }

function Extra() {

    return (
        <div className='extraBG'>
            <motion.div initial="hidden" animate="visible" variants={variants}>
              <div style={{    padding: "50px 0px 0px 120px", boxSizing: 'content-box', margin: "auto"}} >  
              <Grid container  > 

            <Grid item xs={4}>
              <div className="body1">
                <div className="card transition">
                  <h2 className="transition">Service A</h2>
                  <p>Aenean lacinia bibendum nulla sed consectetur. Donec ullamcorper nulla non metus auctor fringilla.</p>
                  <div className="cta-container transition">
                    <a href="#" className="cta">
                    Details
                  </a>
                  </div>
                  <div className="card_circle cardcolor1 transition"></div>
                </div>
              </div >
            </Grid>

            <Grid item xs={4}>
              <div className="body1">
                <div className="card transition">
                  <h2 className="transition">Service B</h2>
                  <p>Aenean lacinia bibendum nulla sed consectetur. Donec ullamcorper nulla non metus auctor fringilla.</p>
                  <div className="cta-container transition">
                    <a href="#" className="cta">
                    Details
                  </a>
                  </div>
                  <div className="card_circle cardcolor2 transition"></div>
                </div>
              </div >
            </Grid>

            <Grid item xs={4}>
              <div className="body1">
                <div className="card transition">
                  <h2 className="transition">Service C</h2>
                  <p>Aenean lacinia bibendum nulla sed consectetur. Donec ullamcorper nulla non metus auctor fringilla.</p>
                  <div className="cta-container transition">
                    <a href="#" className="cta">
                      Details
                  </a>
                  </div>
                  <div className="card_circle cardcolor3 transition"></div>
                </div>
              </div >
            </Grid>
              
              </Grid> 
              </div>

          </motion.div>
        </div>
    )
}

export default Extra
