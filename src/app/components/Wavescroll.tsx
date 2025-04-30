"use client"

import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import WaveDot from "../components/Wavedot"
import { useMediaQuery } from "react-responsive"
import Circle from "./Circle"
import GridBackground from "./Gridlayout"



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
    <div ref={scrollContainerRef} className="relative h-[300vh]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}

       className="sticky top-0 flex justify-start items-start  h-[90vh]  lg:h-screen  overflow-hidden  bg-transperent">
         <GridBackground cols={isMobile ? 5 : 10} rows={isMobile ? 6 : 5} lineColor="rgba(100, 100, 100, 0.1)" fadeEdges={true} />

        <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                }}
                viewport={{ once: true }}
                className="absolute top-0 flex flex-col justify-start items-start left-[8%]">
                <Circle big="#34E89E" small="#F8FFE5" text="My Path" />
                <h1 className="text-4xl mt-10 text-[#0F3443]/80 font-[600]">Discover my Professional path and experiences</h1>
        </motion.div>
        <motion.div className="flex justify-start w-screen  lg:h-[80%] left-0 lg:mt-[15%] md:mt-[5%] -mt-[10%] lg:-translate-x-[30%] md:translate-x-[220%] translate-x-[220%]" style={{ x }}>
  <div className="relative left-0 flex w-[400vw] h-[30%] items-start justify-start scale-x-200 lg:scale-40 lg:scale-x-80">
    {/* Wave Dots */}

    <div className="absolute lg:-scale-x-80 -scale-120 scale-x-100 top-[45%] left-[3%] lg:top-[200%] lg:-left-[1%]">
      <WaveDot year="2020" title="Started Journey" text="Completed 10th class. The beginning of my professional career and exploration." />
    </div>

    <div className="absolute lg:-scale-x-80 -scale-120 scale-x-100 top-1/2 lg:top-[320%] left-[14%]">
      <WaveDot year="2021" title="First Move with Failure" text="Chose Science in 12th to pursue a career in Computer Science and started JEE preparation. Completed 12th with 93.48 percentile in JEE Mains but secured admission in a tier-3 college." />
    </div>

    <div className="absolute lg:-scale-x-80 -scale-120 scale-x-100 top-[43%] lg:top-[150%] left-[25%]">
      <WaveDot year="2022" title="College Life" text="Joined Birla Vishvakarma Mahavidyalaya (BVM), batch of 2026, Information Technology student. Joined Deco Club as core member and successfully organized three main college events." />
    </div>

    <div className="absolute lg:-scale-x-80 -scale-120 scale-x-100 top-[52%] lg:top-[320%] left-[36%]">
      <WaveDot year="2023" title="College Leadership" text="Joined GDSC as PR Lead, leading four major events. Also became active in coding activities and tech clubs." />
    </div>

    <div className="absolute lg:-scale-x-80 -scale-120 scale-x-100 top-[50%] lg:top-[165%] left-[50%]">
      <WaveDot year="2023" title="First Internship" text="Worked with Codesoft Solutions as a Frontend Developer."  />
    </div>

    <div className="absolute lg:-scale-x-80 -scale-120 scale-x-100 top-[50%] lg:top-[440%] left-[64%]">
         <WaveDot year="2024" title="Career Upgrade" text="Joined HP Param Solutions as Fullstack developer" />
   
    </div>

    <div className="absolute lg:-scale-x-80 -scale-120 scale-x-100 top-[46%] lg:top-[190%] left-[78%]">
      <WaveDot year="2025" title="Join startup" text="Working in startup as Senior Developer in Tastezy Marketplace" />
    </div>

    <div className="absolute lg:-scale-x-80 -scale-120 scale-x-100 top-[55%] lg:top-[390%] left-[92%]">
      <WaveDot year=" In upcoming years" title="Vision for Future" text="Planning bigger projects, leadership roles, and launching personal brands." />
    </div>

    {/* SVG Wave */}
    <svg width="9526" height="1144" viewBox="0 0 9526 1144" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path
        d="M5 565C5 565 505 -663.003 1186 579C1867 1821 2337 575 2337 575C2337 575 2919 -697 3530 562C4141 1821 4723 579 4723 579C4723 579 5327 -679 5944 579C6561 1837 7137 579 7137 579C7137 579 7801 -695.003 8349 556.999C8897 1809 9521 556.999 9521 556.999"
        stroke="#FF0000"
        strokeWidth="20"
        strokeLinecap="round"
      />
    </svg>
  </div>
</motion.div>

       
      </motion.div>
        
    </div>
  )
}

