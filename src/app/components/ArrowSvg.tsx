"use client"
import React from 'react'
import { motion } from 'framer-motion'

const ArrowSvg = () => {
  return (
    <div className="flex items-center justify-center">
      <svg width="213" height="70" viewBox="0 0 223 90" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
         d="M13 11.0001C29.5021 54.0479 59 95 97 85.0001C135 75.0002 138.333 27.0001 133 21.0001C133 21.0001 125 -10.9997 97 11.0001C69 33 128 72.7451 159 77C190 81.2549 210 58 210 58M13 11.0001L43.5 19M13 11.0001L3.5 36"
          stroke="#AB0003"
          strokeWidth="5"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{
            delay: 2,
            duration: 2,
            ease: 'easeInOut',
          }}
        />
      </svg>
    

    </div>
  )
}



export default ArrowSvg
