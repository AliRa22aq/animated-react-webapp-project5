import React, {useEffect, useState} from 'react'
import { motion } from "framer-motion";
import { AutoRotatingCarousel, Slide } from 'material-auto-rotating-carousel';


const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }

function More() {

    return (
        <div className='moreBG'>
                        <motion.div initial="hidden" animate="visible" variants={variants}>
                            I am more
                        </motion.div>





        </div>
    )
}

export default More;
