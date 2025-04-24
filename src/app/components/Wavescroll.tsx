"use client"

import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import WaveDot from "../components/Wavedot"
import { useMediaQuery } from "react-responsive"
import Circle from "./Circle"
import GridBackground from "./Gridlayout"

// Messages for each dot
const dotMessages = [
  "This is the first milestone in our journey",
  "We achieved significant growth in Q2",
  "Product launch exceeded expectations",
  "New partnerships formed in this period",
  "Expansion into international markets",
  "Record-breaking sales quarter",
  "Major technological breakthrough",
]

export default function WaveScroll() {
    const isMobile = useMediaQuery({ maxWidth: 768 })
    const isTablet = useMediaQuery({ maxWidth: 1224 })
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  // This will track scroll progress through the entire scroll container
  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ["start start", "end end"],
  })

  // Transform scroll progress to horizontal movement
  const x = useTransform(scrollYProgress, [0, 1], ["0%", isMobile? "-715%":(isTablet? "-710%": "-225%")])

  // (Optional) For debugging scroll progress in dev
  useEffect(() => {
    scrollYProgress.on("change", (v) => {
      console.log("Scroll progress:", v.toFixed(2))
    })
  }, [scrollYProgress])


  return (  
    <div ref={scrollContainerRef} className="relative h-[300vh] ">
      <motion.div className="sticky top-0 flex justify-start items-start  h-[90vh]  lg:h-screen w-screen overflow-hidden  bg-transperent">
         <GridBackground cols={isMobile ? 5 : 10} rows={isMobile ? 6 : 5} lineColor="rgba(100, 100, 100, 0.1)" fadeEdges={true} />

        <div className="absolute top-0 flex flex-col justify-start items-start left-[8%]">
                <Circle big="#34E89E" small="#F8FFE5" text="My Path" />
                <h1 className="text-4xl mt-10 text-[#0F3443]/80 font-[600]">Discover my Professional path and experiences</h1>
        </div>
        <motion.div className="flex justify-start  w-screen  lg:h-[80%] left-0  lg:mt-[15%] md:mt-[5%] -mt-[10%] lg:-translate-x-[30%] md:translate-x-[220%]  translate-x-[220%]  " style={{ x }}>
          <div className="relative left-0 flex w-[400vw]   h-[30%]  items-start justify-start scale-x-200 lg:scale-40 lg:scale-x-80   ">
            {/* The wave path - using SVG for precise control */}
            
                <div className="absolute lg:-scale-x-80 -scale-120 scale-x-100  top-[45%] lg:top-[200%] -left-[1%]"> 

                <WaveDot/>
                </div>
                 <div className="absolute lg:-scale-x-80 -scale-120 scale-x-100  top-1/2 lg:top-[320%] left-[14%]"> 

                <WaveDot/>
                </div>

                 <div className="absolute lg:-scale-x-80 -scale-120 scale-x-100  top-[43%] lg:top-[150%] left-[25%]"> 

                <WaveDot/>
                </div>
                 <div className="absolute lg:-scale-x-80 -scale-120 scale-x-100  top-[52%] lg:top-[320%] left-[36%]"> 

                <WaveDot/>
                </div>
                <div className="absolute lg:-scale-x-80 -scale-120 scale-x-100  top-[50%] lg:top-[165%] left-[50%]"> 

                <WaveDot/>
                </div>
                <div className="absolute lg:-scale-x-80 -scale-120 scale-x-100  top-[50%] lg:top-[440%] left-[64%]"> 

                <WaveDot/>
                </div>
                <div className="absolute lg:-scale-x-80 -scale-120 scale-x-100  top-[46%] lg:top-[190%] left-[78%]"> 

                <WaveDot/>
                </div>
                <div className="absolute lg:-scale-x-80 -scale-120 scale-x-100  top-[55%] lg:top-[390%] left-[92%]"> 

                <WaveDot/>
                </div>
            
            <svg width="9526" height="1144" viewBox="0 0 9526 1144" fill="none" xmlns="http://www.w3.org/2000/svg">
              <motion.path
                d="M5 565C5 565 505 -663.003 1186 579C1867 1821 2337 575 2337 575C2337 575 2919 -697 3530 562C4141 1821 4723 579 4723 579C4723 579 5327 -679 5944 579C6561 1837 7137 579 7137 579C7137 579 7801 -695.003 8349 556.999C8897 1809 9521 556.999 9521 556.999"
                stroke="#FF0000"
                strokeWidth="20"
                strokeLinecap="round"
              />
            </svg>

            {/* Dots positioned along the wave */}
             
           
          </div>

          
        </motion.div>
       
      </motion.div>
        
    </div>
  )
}

