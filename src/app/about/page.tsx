"use client"
import Title from "../components/Title"
import Footer from "../components/Footer"
import Circle from "../components/Circle"
import Quote from "../components/Quote"
import RandomTools from "../components/Randomtools"
import Button from "../components/Button"
import Responsive from "../components/Responsive"
import Sketch from "../components/Sketch"

const page = () => {
  return (
    <div className="w-full h-full">
      <Title text="About Me" />
      <div className="w-full   bg-[#F8FFE5] flex flex-col items-center justify-center">
        <div className="md:w-[98%] lg:w-[90%] w-[95%]  grid lg:grid-rows-[2fr_0.9fr] md:grid-rows-[2fr_0.7fr] grid-rows-[2fr_0.7fr]  p-2 md:p-2 lg:p-10 gap-10">
          {/* Top Section */}
          <div className="grid lg:grid-cols-[1fr_1.2fr] lg:grid-rows-none md:grid-rows-none md:grid-cols-[1fr_1fr] grid-rows-[1fr_1fr] gap-5">
            {/* Left Column */}
            <div className="h-full grid lg:grid-rows-[1fr_3fr] grid-rows-[0.6fr_2.5fr] gap-2 ">
              <div className="">
                <Circle big="#34E89E" small="#F8FFE5" text="Why Me?" />
              </div>
              <div className="bg-[#C3E3FF] flex justify-center items-center rounded-4xl drop-shadow-xl shadow-xl">
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
                    <Button text="Resume"/>
                  </div>
                  <div className="relative justify-center items-center h-[50%] w-[80%]">
                    <RandomTools />
                  </div>
                  <div className="text-2xl text-[#0F3443] font-[600] w-[80%] mb-4 font-playfair">
                    continue learning ...
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="h-full grid grid-rows-[3fr_1.5fr] gap-10 ">
              <div className="bg-[#FEE3A8] flex flex-col justify-center items-center rounded-4xl drop-shadow-xl shadow-xl">
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
                    <Button text="Projects" />
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
              </div>
              <div className="bg-[#FEC5BD] flex flex-col justify-center items-center rounded-4xl drop-shadow-xl shadow-xl">
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
                    <Button text="Connect" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="bg-pink-300  flex flex-col justify-center items-center rounded-4xl drop-shadow-xl shadow-xl">Bottom (0.9fr) 5th

          </div>


        </div>
      </div>

      <Footer />
    </div>
  )
}

export default page