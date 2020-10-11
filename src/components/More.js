import React from 'react'
import { motion } from "framer-motion";
import Test from './Test'




const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }
   
function More() {


    return (
        <div className='moreBG'>
        <motion.div initial="hidden" animate="visible" variants={variants}>
                <Test />
        </motion.div>


        </div>
    )
}

export default More;
