import React from 'react';
import { motion } from "framer-motion";


const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }

function Contact() {
    return (
        <div className='moreBG'>

            <motion.div initial="hidden" animate="visible" variants={variants}>
                
                I am Contact
            
            </motion.div>
        </div>
    )
}

export default Contact
