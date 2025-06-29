"use client"
import Title from "../components/Title"
import Footer from "../components/Footer"
import Link from "next/link"
import Circle from "../components/Circle"
import Loading from "../components/Loding"
import { useRef, useState } from "react"
import { useScroll, useTransform } from "motion/react"
import { motion } from "framer-motion"



const Page = () => {

    const container = useRef<HTMLDivElement>(null);
     const {scrollYProgress} = useScroll({
        target: container,
        offset: ["start end", "end start"]
      });
       const y = useTransform(scrollYProgress,[0.4, 0.7], ["0%", "80%"]);

  const [isLoading, setIsLoading] = useState(true);
  return (
    <div ref={container} className={`relative w-full h-full bg-[#F8FFE5] ${isLoading ? 'overflow-hidden h-screen' : ''}`}>
       {/* <Loading /> */}
        {isLoading && <Loading onFinish={() => setIsLoading(false)} />}
      <Title text="Contact" />
      <div className="flex flex-col justify-center items-center w-full h-full">
      <motion.div style={{y:y}}  className="text-4xl lg:text-8xl font-bold mb-4 text-clip  bg-gradient-to-b  from-orange-500 via-yellow-300/50 to-[#F8FFE5] bg-clip-text text-transparent ">
        GET IN TOUCH  
      </motion.div>
      <div className="w-[95%] z-10 lg:w-[90%] mb-10 p-6 md:p-10 rounded-3xl shadow-md border-[0.5]  bg-[url(/sky.png)] border-white drop-shadow-md text-[#0F3443]">
        {/* Three-section flex container */}
        <div className="flex flex-col  justify-between lg:items-end item-center gap-8 lg:gap-8 min-h-[60vh]">


             {/* Second section - Circle (centered) */}
          <div className="w-full lg:w-full  flex justify-center lg:justify-start px-10 items-start py lg:py-0">
            <Circle small="oklch(98.7% 0.022 95.277)" big="#34E89E" text=" " />
          </div>

          {/* First section - Contact info */}
          <div className="w-full flex flex-col items-center lg:items-end lg:space-y-4 space-y-1">
            <div className="text-3xl lg:text-4xl font-extralight mb-4">Connect</div>
            <Link
              href="tel:+919925864886"
              className="relative group text-xl font-bold md:text-2xl lg:text-6xl p-0 lg:p-2 opacity-90 transition-all duration-100 hover:opacity-100 overflow-hidden"
            >
              +91 99258 64886
              <span className="absolute bottom-0 left-0 h-[1px] bg-black transition-all duration-500 w-0 group-hover:w-[115%]"></span>
            </Link>
            <Link
              href="mailto:jimmyfreelance@gmail.com"
              className="relative group text-xl font-bold md:text-2xl lg:text-6xl opacity-90 transition-all duration-100 hover:opacity-100 overflow-hidden p-0 lg:p-2 break-all"
            >
              jimmyfreelance@gmail.com
              <span className="absolute bottom-0 left-0 h-[1px] bg-black transition-all duration-500 w-0 group-hover:w-full"></span>
            </Link>
          </div>

 

          {/* Third section - Social Media */}
          <div className="w-full flex flex-col items-center lg:items-end space-y-6">
            <div className="text-2xl md:text-3xl">Social Media</div>
            <div className="flex flex-col items-center lg:items-end space-y-4">
              <Link
                href="https://www.linkedin.com/in/jimmydudhwala"
                target="_blank"
                className="relative group w-fit text-xl font-bold opacity-85 transition-all duration-100 hover:opacity-100 overflow-hidden"
              >
                LinkedIn
                <span className="absolute bottom-0 left-0 h-[1px] bg-black transition-all duration-500 w-0 group-hover:w-full"></span>
              </Link>
              <Link
                href="https://www.instagram.com/your_instagram_username"
                target="_blank"
                className="relative group text-xl w-fit opacity-85 transition-all duration-100 hover:opacity-100 font-bold overflow-hidden"
              >
                Instagram
                <span className="absolute bottom-0 left-0 h-[1px] bg-black transition-all duration-500 w-0 group-hover:w-full"></span>
              </Link>
              <Link
                href="https://twitter.com/your_twitter_username"
                target="_blank"
                className="relative group text-xl w-fit opacity-85 transition-all duration-100 hover:opacity-100 font-bold overflow-hidden"
              >
                Twitter
                <span className="absolute bottom-0 left-0 h-[1px] bg-black transition-all duration-500 w-0 group-hover:w-full"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default Page
