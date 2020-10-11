import React from 'react'
import { motion } from "framer-motion";
import AccordionX from './AccordionX'




const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }
   
function More() {


    return (
        <div className='moreBG'>
        <motion.div initial="hidden" animate="visible" variants={variants}>
                <AccordionX />
        </motion.div>


        </div>
    )
}

export default More;
