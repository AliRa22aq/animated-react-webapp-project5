import React, {useEffect} from 'react'
import { motion, useAnimation } from "framer-motion"

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

function Extra() {

    return (
        <div className='extraBG'>
            <motion.div initial="hidden" animate="visible" variants={variants}>
                <motion.ul initial="hidden" animate="visible" variants={list}>
                     
                    <motion.li variants={item}> A </motion.li>
                    <motion.li variants={item}> B </motion.li>
                    <motion.li variants={item}> C </motion.li>
                    <motion.li variants={item}> D </motion.li>
                    <motion.li variants={item}> E </motion.li>
                    <motion.li variants={item}> F </motion.li>
                    <motion.li variants={item}> G </motion.li>
                    <motion.li variants={item}> H </motion.li>
                    <motion.li variants={item}> I </motion.li>
                    <motion.li variants={item}> J </motion.li>
                    <motion.li variants={item}> K </motion.li>


                </motion.ul>

            </motion.div>


        </div>
    )
}

export default Extra
