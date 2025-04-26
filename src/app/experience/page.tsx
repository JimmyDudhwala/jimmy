import React from 'react'
import Title from '../components/Title'
import Circle from '../components/Circle'
import { motion } from 'framer-motion'



const page = () => {
  return (
    <div className='w-full h-full'>
        <Title text="Experience" />
        <div className='w-full h-screen bg-[#F8FFE5] flex items-center justify-center'>
            <div className='relative w-full h-full flex items-center justify-center'>
             <div className='w-1/2  h-full flex items-center justify-center'>
              <div className="absolute  top-[40.5%]">
                <svg
                  width={"200"}
                  height={"200"}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx={"100"}
                    cy={"100"}
                    r={"96"}        
                    stroke="yellow"
                    strokeWidth="5"
                    fill="none"
                    // style={{ pathLength: circleProgress }}
                  />
                </svg>
              </div>
              <div className='text-8xl'>

              <Circle big="#34E89E" small="#F8FFE5" text="Recent Work"  />
              </div>
            </div>
            <div className='w-1/2 h-full'>

            </div>
            </div>
        </div>
    </div>
  )
}

export default page
