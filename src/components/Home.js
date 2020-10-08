import React from 'react';
import { motion, useAnimation } from "framer-motion";

const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }

function Home() {
    return (
        <div className = 'homeBG'>
            <motion.div initial="hidden" animate="visible" variants={variants}>

            Hello Home

            </motion.div>
        </div>
    )
}

export default Home
