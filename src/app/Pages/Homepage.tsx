"use client"
import React, { useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import Circle from '../components/Circle'
import Image from 'next/image'
import Tiny from '../components/Tiny'
import Cursor from '../components/Cursor'
import ArrowSvg from '../components/ArrowSvg'
import ScrollLock from '../components/ScrollLock'
import Footer from '../components/Footer'
import Quote from '../components/Quote'
import SocialMedia from '../components/SocialMedia'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'

const quote = "Crafting intelligent digital products with thoughtful design and powerful code"
const highlights = ["Crafting", "digital products", "design", "code"]

const Homepage = () => {

      const container = useRef<HTMLDivElement>(null);
      const isMobile = useMediaQuery({ maxWidth: 768 })
      const {scrollYProgress} = useScroll({
        target: container,
        offset: ["start end", "end start"]
      });

      const y1 = useTransform(scrollYProgress,[0.4, 0.7], ["0%", "100%"]);
      const y2 = useTransform(scrollYProgress,[0.5, 0.7], ["0%", "300%"]);
      const y3 = useTransform(scrollYProgress,[0.5, 0.7], ["0%", isMobile? "-5%":"-10%"]);
      const y4 = useTransform(scrollYProgress,[0.5, 0.7], ["0%", "-200%"]);
      const y5 = useTransform(scrollYProgress,[0.4, 0.7], ["0%", "-100%"]);
      const y6 = useTransform(scrollYProgress,[0.4, 0.7], ["0%", "3%"]);
      // const r1 = useTransform(scrollYProgress,[0, 1], [10, 300]);

      const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <ScrollLock locked={isOpen}>
    <div ref={container} className="lg:h-screen  w-full bg-[#F8FFE5] relative overflow-hidden lg:pb-0 pb-20 ">
<motion.div 
  initial={{ height: 0,}}

  animate={{ height: "90%"}}
  transition={{ duration: 1 }}
 
 
  className="h-[90%] w-full bg-[#34E89E] relative rounded-b-[100px] shadow-2xl flex flex-col gap-10 items-center drop-shadow-2xl"
>

        {/* Cursors - visible only on lg screens */}
        <motion.div style={{y:y2}} className="hidden lg:block absolute z-50 top-2/12 left-1/12">
          <Cursor  message="UI/UX Designer" color="#CFC2FF" />
        </motion.div>
        <motion.div style={{y:y2}} className="hidden lg:block absolute z-50  top-3/12 left-5/12">
          <Cursor message="App developer" color="orange" />
        </motion.div>
        <motion.div style={{y:y4}} className="hidden lg:block absolute z-50 bottom-1/12 left-2/12">
          <Cursor message="Full-Stack Developer" color="#FF00DD" />
        </motion.div>
        <motion.div style={{y:y4}} className="hidden lg:block absolute z-50 top-4/12 right-1/12">
          <Cursor message="AI/ML Explorer" color="purple" />
        </motion.div>
        <motion.div style={{y:y2}} className="hidden lg:block absolute z-50 bottom-2/12 right-2/12">
          <Cursor message="System Architect" color="#AB0003" />
        </motion.div>

        {/* Top Section */}
        <div className="w-full lg:w-[60%] h-auto lg:h-[25%] mt-10 lg:m-0 flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{  opacity: 1 }}
            transition={{
              opacity: { delay: 0.8, duration: 1, ease: "easeInOut" },
            }}
          >
            <Circle big="#F8FFE5" small="#34E89E" text="Portfolio" />
          </motion.div>
          <motion.div style={{y:y1}} className="absolute lg:relative right-0 mt-4 lg:mt-0">
            <Tiny width={100} height={100} src="/hash.svg" />
          </motion.div>
          
           <motion.div
            initial={{ opacity: 0 }}
            animate={{  opacity: 1 }}
            transition={{
              opacity: { delay: 0.8, duration: 1, ease: "easeInOut" },
            }}
          >

          <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      </motion.div>
      
          
         
        </div>

        {/* Bottom Content */}
        <div className="w-full  h-full flex flex-col lg:flex-row justify-center items-center overflow-hidden  rounded-b-[100px] lg:rounded-b-[100px] ">
          {/* Star Tiny */}
          <motion.div style={{y:y1}} className="absolute top-3/12 lg:top-0 left-0 lg:scale-100 scale-40  lg:relative">
            <Tiny width={150} height={150} src="/star.svg" />
          </motion.div>

          {/* Quote Section */}
          <div className=' lg:w-[75%] w-full h-full flex lg:flex-row flex-col  justify-center '>

            <div className=' lg:w-[25%] w-full h-full   flex lg:flex-row flex-col lg:justify-end lg:items-end pb-10'>

              <div className='relative lg:translate-x-30 z-20 ' >
                {/* Quote */} 
                <motion.div 
                  className="w-full relative max-w-[510px] text-[clamp(1.5rem,3vw,3rem)] mx-auto text-center font-playfair font-extrabold leading-snug text-[#0F3443]"
                  style={{ width: 'clamp(300px, 50vw, 510px)', y:y3 }}
                >
                  “ <Quote quote={quote} highlights={highlights} />”
                </motion.div>
                <motion.div style={{y:y5}} className='text-end w-[80%] text-[#0F3443] text-xl md:text-2xl lg:text-3xl font-extrabold leading-snug mt-5'>
                  Jimmy
                </motion.div>
                <div className='absolute lg:-right-22 right-38 scale-[0.8] lg:scale-100 rotate-[90deg] lg:-rotate-[24deg]  lg:-bottom-5'>
                  <ArrowSvg />
                </div>
          </div>
              </div>
        

          {/* Photo Section */}
          <div className="lg:w-[60%] w-full h-full  flex flex-col justify-end items-center relative">
            {/* Image */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{  opacity: 1 }}
              transition={{
                opacity: { delay: 0.8, duration: 0.8, ease: "easeInOut" },
              }}
             className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-full z-20"
             style={{x:y6}}
             >
              <Image src="/photo.png" alt="my photo" fill className="object-contain" />
            </motion.div >

            {/* Background Circles */}
            <motion.div  className="w-full h-full  absolute flex justify-center items-end top-[30%]  lg:top-[25%]">
              <motion.div 
                initial={{ width: 0,
                            height:0
                 }}
                animate={{width: isMobile ? "110%":"90%",
                            height:"120%"}}
                transition={{
                  delay:1.4,
                  duration:1,
                }}
              className="bg-[#E0FF4F] lg:w-[90%] w-[110%] h-[120%] rounded-full absolute scale-[0.9] sm:scale-[1]" />
              <motion.div 
                 initial={{ width: 0,
                            height:0
                 }}
                animate={{width: isMobile ? "100%":"70%",
                            height:"100%"}}
                transition={{
                  delay:1.3,
                  duration:1,
                }}
              className="bg-[#EFFFA3] lg:w-[70%] w-[100%] h-[100%] rounded-full absolute scale-[0.9] sm:scale-[1]" />
              <motion.div 
                initial={{ width: 0,
                            height:0
                 }}
                animate={{width: isMobile ? "90%":"60%",
                            height:"80%"}}
                transition={{
                  delay:1.2,
                  duration:1,
                }}
              className="bg-[#0F3443] lg:w-[60%] w-[90%] h-[80%] rounded-full absolute scale-[0.9] sm:scale-[1]" />
            </motion.div >

            {/* Doubt Tiny */}
            <div className="absolute top-0 right-0">
              <Tiny width={150} height={150} src="/doubt.svg" />
            </div>
          </div>

          </div>
        </div>

      </motion.div>
    </div>
    
    <SocialMedia />

    <Footer/>
   
    </ScrollLock>
    </>
  )
}

export default Homepage
