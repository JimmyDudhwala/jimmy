"use client"
import Title from "../components/Title"
import Footer from "../components/Footer"
import Circle from "../components/Circle"
import Quote from "../components/Quote"
import RandomTools from "../components/Randomtools"
import Button from "../components/Button"
import Responsive from "../components/Responsive"
import Sketch from "../components/Sketch"
import Image from "next/image"
import WaveScroll from "../components/Wavescroll"
import Loading from "../components/Loding"
import { useState } from "react"
import { motion } from "framer-motion"



const Page = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  return (
     <div className={`relative h-full ${isLoading ? 'overflow-hidden h-screen' : ''}`}>
       {/* <Loading /> */}
        {isLoading && <Loading onFinish={() => setIsLoading(false)} />}
      <Title text="About Me" />
      <div className="w-full   bg-[#F8FFE5] flex flex-col items-center justify-center">
        <div className="md:w-[98%] lg:w-[90%] w-[95%]  grid lg:grid-rows-[2fr_0.9fr] md:grid-rows-[2fr_1fr] grid-rows-[2fr_0.7fr]  p-2 md:p-2 lg:p-10 gap-10">
          {/* Top Section */}
          <div className="grid lg:grid-cols-[1fr_1.2fr] lg:grid-rows-none md:grid-rows-none md:grid-cols-[1fr_1fr] grid-rows-[1fr_1fr] gap-5">
            {/* Left Column */}
            <div className="h-full grid lg:grid-rows-[1fr_3fr] grid-rows-[0.6fr_2.5fr] gap-2 ">
                <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                }}
                viewport={{ once: true }}
                className=""
                >
                <Circle big="#34E89E" small="#F8FFE5" text="Why Me?" />
                </motion.div>
              <motion.div
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  x: { delay: 0, duration: 2, ease: "easeInOut" },
                  opacity: { delay: 0, duration: 2, ease: "easeInOut" },
                }} 
                viewport={{ once: true }}
                className="bg-[#C3E3FF] flex justify-center items-center rounded-4xl drop-shadow-xl shadow-xl">
                <div className="relative w-[99%] h-[99%] border-2 rounded-4xl flex flex-col items-center justify-start">
                  <div className="relative text-[3rem] text-[#0F3443] font-[600] pl-10 pt-3 font-playfair">
                    <Quote quote="build" highlights={["build"]} />
                    <div className="text-[#0F3443] text-[1.7rem] font-[900] w-[85%] mt-10 font-playfair">
                      Seamless, high-performance web & mobile experiences
                    </div>
                    <div>
                      <ol className="text-[#0F3443] leading-loose text-[1.2rem] font-[600] w-[80%] mt-3 font-playfair">
                        <li>Full-stack expertise</li>
                        <li>Lightning-fast performance</li>
                      </ol>
                    </div>
                  </div>
                  <div className="h-[10%] w-full m-5 flex justify-start pl-10 items-center">
                    <Button text="Resume" link="https://drive.google.com/file/d/1I6qoOhfjpKiv8Njda92vj5jOO8WSR6Ck/view?usp=sharing"/>
                  </div>
                  <div className="relative justify-center items-center h-[50%] w-[80%]">
                    <RandomTools />
                  </div>
                  <div className="text-2xl text-[#0F3443] font-[600] w-[80%] mb-4 font-playfair">
                    continue learning ...
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="h-full grid grid-rows-[3fr_1.5fr] gap-10 ">
              <motion.div
                initial={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  x: {  duration: 2, ease: "easeInOut" },
                  opacity: {  duration: 2, ease: "easeInOut" },
                }}
                  viewport={{ once: true }}
                
                
               className="bg-[#FEE3A8] flex flex-col justify-center items-center rounded-4xl drop-shadow-xl shadow-xl">
                <div className="relative w-[99%] h-[99%] border-2 rounded-4xl flex flex-col items-center justify-start">
                  <div className="relative w-full pl-10 text-[3rem] text-[#0F3443] font-[600] pt-3 font-playfair">
                    <Quote quote="Create" highlights={["Create"]} />
                    <div className="text-[#0F3443] text-[1.7rem] font-[900] w-[85%] mt-10 font-playfair">
                      Blending aesthetics with functionality
                    </div>
                    <div>
                      <ol className="text-[#0F3443] leading-loose text-[1.2rem] font-[600] w-[80%] mt-3 font-playfair">
                        <li>Modern UI/UX</li>
                        <li>User-centric design</li>
                        <li>Consistent branding</li>
                      </ol>
                    </div>
                  </div>
                  <div className="h-[10%] w-full m-5 flex justify-start pl-10 items-center">
                    <Button text="Projects" link="/projects" />
                  </div>
                  <div className="relative flex justify-center items-center h-[60%] w-[80%]">
                    <div className="absolute md:scale-78 scale-75 lg:scale-90">
                      <Sketch />
                    </div>
                    <div className="absolute w-[90%] h-[60%] bg-yellow-400/40 blur-3xl"></div>
                    <div className="absolute flex justify-center items-center scale-70 lg:scale-90">
                      <Responsive />
                    </div>
                  </div>
                </div>
              </motion.div>
               <motion.div
                initial={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  x: {  duration: 2, ease: "easeInOut" },
                  opacity: {  duration: 2, ease: "easeInOut" },
                }}
                  viewport={{ once: true }}
                 className="bg-[#FEC5BD] flex flex-col justify-center items-center rounded-4xl drop-shadow-xl shadow-xl">
                <div className="relative w-[99%] h-[99%] border-2 rounded-4xl flex flex-col items-center justify-start">
                  <div className="relative w-full pl-10 text-[3rem] text-[#0F3443] font-[600] pt-3 font-playfair">
                    <Quote quote="Collaborate" highlights={["Collaborate"]} />
                    <div className="text-[#0F3443] text-[1.7rem] font-[900] w-[85%] mt-10 font-playfair">
                      Building relationships through collaboration & adaptability
                    </div>
                    <div>
                      <ol className="text-[#0F3443] leading-loose text-[1.2rem] font-[600] w-[80%] mt-3 font-playfair">
                        <li>Proactive approach</li>
                        <li>Agile workflow</li>
                        <li>Seamless collaboration</li>
                      </ol>
                    </div>
                  </div>
                  <div className="h-[10%] w-full m-5 flex justify-start pl-10 items-center">
                    <Button text="Connect" link="/contact"/>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Section */}
          <motion.div
                initial={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  x: {  duration: 2, ease: "easeInOut" },
                  opacity: {  duration: 2, ease: "easeInOut" },
                }}
                  viewport={{ once: true }} className="bg-pink-300 group  flex flex-col justify-center items-center rounded-4xl drop-shadow-xl shadow-xl">
            <div className="relative w-[99.5%] h-[99%] border-2 rounded-4xl flex flex-col items-center justify-start overflow-hidden">
                  <div className="relative w-full pl-10 text-[3rem] text-[#0F3443] font-[600] pt-3 font-playfair">
                    <Quote quote="Innovate" highlights={["Innovate"]} />
                    <div className="text-[#0F3443] text-[1.7rem] font-[900] w-[85%] mt-10 font-playfair">
                      Transforming ideas into future-ready solutions
                    </div>
                    <div>
                      <ol className="text-[#0F3443] leading-loose text-[1.2rem] font-[600] w-[80%] mt-3 font-playfair">
                        <li>Future-proof architecture</li>
                        <li>AI & automation-ready</li>
                      </ol>
                    </div>
                  </div>
                  <div className="h-[10%] w-full m-5 flex justify-start pl-10 items-center">
                    <Button text="Blog" link="/blog" />
                  </div>
                  <div className="relative w-full ">
                    <div className=" absolute lg:-top-60 transition-all duration-300 ease-in-out group-hover:scale-105  group-hover:-rotate-[15deg]  -rotate-[12deg] lg:-right-[16%] lg:scale w-[1000px] h-[500px]">
                      <Image src="/Codesnippet.svg" alt="Code Snippet" fill className="hover:cursor-[url('/Input.svg'),auto]"/>
                    </div>
                  </div>
                </div>
          </motion.div>


        </div>
      </div>
      <div className="bg-[#F8FFE5]">

      <WaveScroll/>
      </div>
      <Footer />
    </div>
  )
}

export default Page