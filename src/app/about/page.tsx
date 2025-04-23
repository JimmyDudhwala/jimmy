"use client"
import Title from "../components/Title"
import Footer from "../components/Footer"
import Circle from "../components/Circle"
import Quote from "../components/Quote"
import RandomTools from "../components/Randomtools"
import Button from "../components/Button"

const page = () => {
  return (
    <div className="w-full h-full">
      <Title text="About Me" />
      <div className="w-full lg:h-[180vh] md:h-[160vh] h-[320vh]  bg-[#F8FFE5] flex flex-col items-center justify-center">
        <div className="md:w-[98%] lg:w-[80%] w-[95%]  h-full grid lg:grid-rows-[2fr_0.8fr] md:grid-rows-[2fr_0.6fr] grid-rows-[2fr_0.4fr] gap-4 md:p-2 lg:p-10 mb-10">
          {/* Top Section */}
          <div className=" h-full grid lg:grid-cols-[1fr_1.2fr] md:grid-cols-[1fr_1fr]   gap-4">
            {/* Left Column */}
            <div className=" h-full grid lg:grid-rows-[1fr_3fr]  grid-rows-[0.6fr_2.5fr] gap-2">
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
                  <div className="h-[10%] w-full mb-5 flex justify-start pl-10 items-center">
                    <Button />
                  </div>
                  <div className="relative justify-center items-center h-[50%] w-[80%] ">
                    <RandomTools />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="bg-green-300 h-full grid grid-rows-[3fr_1.5fr] gap-2">
              <div className="bg-red-300">Top (3fr) 3rd</div>
              <div className="bg-yellow-300">Bottom (1.5fr) 4th </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="bg-pink-300 h-full">Bottom (0.9fr) 5th</div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default page
