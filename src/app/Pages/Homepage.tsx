"use client"
import React from 'react'
import Navbar from '../components/Navbar'
import Circle from '../components/Circle'
import Image from 'next/image'
import Tiny from '../components/Tiny'
import Cursor from '../components/Cursor'
import ArrowSvg from '../components/ArrowSvg'
import { motion } from 'framer-motion'

const quote = "Crafting intelligent digital products with thoughtful design and powerful code"
const highlights = ["Crafting", "digital products", "design", "code"]

const Homepage = () => {
  const renderQuote = () => {
    const words = quote.split(" ")
    const result: React.ReactNode[] = []

    let i = 0
    while (i < words.length) {
      let matched = false
      for (const phrase of highlights) {
        const phraseWords = phrase.split(" ")
        const slice = words.slice(i, i + phraseWords.length).join(" ")
        if (slice === phrase) {
          result.push(
            <span key={i} className="relative inline-block px-1 mx-[1px] break-words">
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute bottom-0 left-0 w-full h-1/3 bg-[#FF6D00] z-0 rounded-sm"
              
              />
              <span className="relative z-10">{phrase}</span>
            </span>
          )
          i += phraseWords.length
          matched = true
          break
        }
      }
      if (!matched) {
        result.push(<span key={i} className="relative">{words[i]} </span>)
        i++
      }
    }
    return result
  }

  return (
    <>
    <div className="lg:h-screen h-full w-full bg-[#F8FFE5] relative overflow-hidden">
      <div className="lg:h-[85%] h-full w-full bg-[#34E89E] lg:rounded-b-[200px] rounded-b-[60px] relative shadow-2xl flex flex-col gap-10 items-center drop-shadow-2xl">

        {/* Cursors - visible only on lg screens */}
        <div className="hidden lg:block absolute top-2/12 left-12">
          <Cursor message="UI/UX Designer" color="#CFC2FF" />
        </div>
        <div className="hidden lg:block absolute top-3/12 left-5/12">
          <Cursor message="App developer" color="orange" />
        </div>
        <div className="hidden lg:block absolute bottom-2/12 left-1/12">
          <Cursor message="Full-Stack Developer" color="#FF00DD" />
        </div>
        <div className="hidden lg:block absolute top-4/12 right-12">
          <Cursor message="AI/ML Explorer" color="purple" />
        </div>
        <div className="hidden lg:block absolute bottom-2/12 right-1/12">
          <Cursor message="System Architect" color="#AB0003" />
        </div>

        {/* Top Section */}
        <div className="w-full lg:w-[60%] h-auto lg:h-[25%] mt-10 lg:m-0 flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between">
          <div>
            <Circle big="#F8FFE5" small="#34E89E" text="Portfolio" />
          </div>
          <div className="absolute lg:relative right-0 mt-4 lg:mt-0">
            <Tiny width={100} height={100} src="/hash.svg" />
          </div>
          <Navbar />
        </div>

        {/* Bottom Content */}
        <div className="w-full h-full flex flex-col lg:flex-row justify-center items-center overflow-hidden  rounded-b-[60px] lg:rounded-b-[200px]  px-4">
          {/* Star Tiny */}
          <div className="absolute left-0 top-4/12 lg:top-0 lg:left-0 lg:scale-100 scale-40  lg:relative">
            <Tiny width={150} height={150} src="/star.svg" />
          </div>

          {/* Quote Section */}
          <div className=' lg:w-[75%] w-full h-full flex lg:flex-row flex-col overflow-hidden justify-center '>

            <div className=' lg:w-[25%] w-full h-full   flex lg:flex-row flex-col lg:justify-end lg:items-end pb-10'>

              <div className='relative lg:translate-x-30 z-20 ' >
                <div className='absolute top-0 -left-20'>

                </div>
                <div
                  className="w-full relative max-w-[510px] text-[clamp(1.5rem,3vw,3rem)] mx-auto text-center font-playfair font-extrabold leading-snug text-[#0F3443]"
                  style={{ width: 'clamp(300px, 50vw, 510px)' }}
                >
                  “ {renderQuote()} ”
                </div>
                <div className='text-end w-[80%] text-[#0F3443] text-xl md:text-2xl lg:text-3xl font-extrabold leading-snug mt-5'>
                  Jimmy
                </div>
                <div className='absolute lg:-right-22 right-38 scale-[0.8] lg:scale-100 rotate-[90deg] lg:-rotate-[24deg]  lg:-bottom-5'>
                  <ArrowSvg />
                </div>
          </div>
              </div>
        

          {/* Photo Section */}
          <div className="lg:w-[60%] w-full h-full  flex flex-col justify-end items-center relative">
            {/* Image */}
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-full z-20">
              <Image src="/photo.png" alt="my photo" fill className="object-contain" />
            </div>

            {/* Background Circles */}
            <div className="w-full h-full  absolute flex justify-center items-end top-[30%]  lg:top-[25%]">
              <div className="bg-[#E0FF4F] lg:w-[90%] w-[110%] h-[120%] rounded-full absolute scale-[0.9] sm:scale-[1]" />
              <div className="bg-[#EFFFA3] lg:w-[70%] w-[100%] h-[100%] rounded-full absolute scale-[0.9] sm:scale-[1]" />
              <div className="bg-[#0F3443] lg:w-[60%] w-[90%] h-[80%] rounded-full absolute scale-[0.9] sm:scale-[1]" />
            </div>

            {/* Doubt Tiny */}
            <div className="absolute top-0 right-0">
              <Tiny width={150} height={150} src="/doubt.svg" />
            </div>
          </div>

          </div>
        </div>

      </div>
    </div>
    <div className='h-screen w-full'>

    </div>
    </>
  )
}

export default Homepage
