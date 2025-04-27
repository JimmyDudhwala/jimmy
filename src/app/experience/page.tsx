"use client"
import React, { useRef } from 'react'
import Title from '../components/Title'
import Circle from '../components/Circle'
import { motion, useScroll, useTransform } from 'framer-motion'
import ExperienceCard from '../components/ExperienceCard'
import Footer from '../components/Footer'

const page = () => {
    const targetElement = useRef(null)
    const { scrollYProgress } = useScroll({
        target: targetElement,
        offset: ["start start", "end end"],
    })

    const y1 = useTransform(scrollYProgress, [0, 0.33], ["0%", "-100%"])
    const y2 = useTransform(scrollYProgress, [0.33, 0.66], ["0%", "-200%"])
    const y3 = useTransform(scrollYProgress, [0.66, 1], ["0%", "-300%"])

    const circleProgress = useTransform(scrollYProgress, [0, 1], [0, 1])



    return (
        <>
        <div className='w-full h-full'>
            <Title text="Experience" />
            <div ref={targetElement} className='w-full h-[300vh] bg-[#F8FFE5]'>
                <div className='sticky top-0 flex flex-col lg:flex-row w-full h-[100vh] overflow-hidden'>

                    {/* Title section - full width on mobile, half width on desktop */}
                    <div className='w-full lg:w-1/2 h-[30vh] lg:h-screen relative flex items-center justify-center'>
                        <div className='w-full h-full flex items-center justify-center'>
                            <div className="lg:scale-[110%] scale-[145%] relative translate-y-[10%]  lg:opacity-100">
                                <svg width={"150"} height={"150"} viewBox="0 0 200 200" className="lg:w-[200px] lg:h-[200px]" xmlns="http://www.w3.org/2000/svg">
                                    <motion.circle
                                        cx={"100"}
                                        cy={"100"}
                                        r={"96"}
                                        stroke="yellow"
                                        strokeWidth="5"
                                        fill="none"
                                        initial={{ pathLength: 0 }}
                    style={{ pathLength: circleProgress }}
                                    />
                                </svg>
                            </div>
                            <div className='absolute text-4xl md:text-6xl lg:text-8xl'>
                                <Circle big="#34E89E" small="#F8FFE5" text="Recent Work" />
                            </div>
                        </div>
                    </div>

                    {/* Scrolling content section - full width on mobile, half width on desktop */}
                    <div className='w-full lg:w-1/2 h-[70vh] lg:h-[300vh] relative'>
                        {/* Sticky container */}
                        <div className='sticky top-0 lg:relative lg:top-0 w-full h-[70vh] lg:h-screen flex flex-col items-center justify-center'>

                            {/* Layer 1 */}
                            <motion.div
                                className='absolute w-full h-full top-[100%] flex items-center justify-center bg-transparent'
                                style={{ y: y1 }}>
                                <div className="w-full px-4 md:px-8 lg:px-0 flex justify-center items-center">
                                    <ExperienceCard year='2023' componyName='Codesoft Solutions' role='Frontend Developer' />
                                </div>
                            </motion.div>
                            {/* Layer 2 */}
                            <motion.div className='absolute w-full top-[200%] h-full bg-transparent flex items-center justify-center'
                                style={{ y: y2 }}>
                                <div className="w-full px-4 md:px-8 lg:px-0 flex justify-center items-center">
                                    <ExperienceCard year='2024' componyName='HP Param Solutions' role='Fulstack Developer'/>
                                </div>
                            </motion.div>
                            {/* Layer 3 */}
                            <motion.div className='absolute w-full top-[300%] h-full bg-transparent flex items-center justify-center'
                                style={{ y: y3 }}>
                                <div className="w-full px-4 md:px-8 lg:px-0 flex justify-center items-center">
                                    <ExperienceCard year='2024' componyName='Tastezy Marketplace' role='Senior Developer'/>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default page