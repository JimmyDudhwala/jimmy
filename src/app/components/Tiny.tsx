"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

interface TinyProps {
  height: number;
  width: number;
  src: string;
}

const Tiny: React.FC<TinyProps> = ({ height, width, src }) => {
   const [isHovering, setIsHovering] = useState(false)
  return (
    <motion.div
      initial={{ scale: 0,
       }}
      animate={{ scale: 1,
      }}
      transition={{ duration: 1, delay: 1.5 }}
     className={`relative z-10  rounded-full overflow-hidden flex justify-center items-center h-[${height}px] w-[${width}px]`}>
      <div className={`absolute bg-[#E0FF4F] rounded-full -z-10 h-1/2 w-1/2  blur-xl  transition-opacity duration-500 ease-in-out ${isHovering? "opacity-100": "opacity-0"}`}
        
      ></div>
      <div
        className='hover:rotate-12 transition-all duration-500 ease-in-out'
         onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        >

      <Image src={src} alt="Tiny" height={height} width={width} />
      </div>
    </motion.div>
  )
}

export default Tiny
