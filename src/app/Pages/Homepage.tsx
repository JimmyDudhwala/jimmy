"use client"
import React from 'react'
import Navbar from '../components/Navbar'
import Circle from '../components/Circle'
import Image from 'next/image'
import Tiny from '../components/Tiny';
import Cursor from '../components/Cursor';
import ArrowSvg from '../components/ArrowSvg';
import {motion } from 'framer-motion';

const quote = "Crafting intelligent digital products with thoughtful design and  powerful code";
const highlights = [
  "Crafting",
  "digital products",
  "design",
  "code"
];



const Homepage = () => {
  const renderQuote = () => {
    const words = quote.split(" ");
    const result: React.ReactNode[] = [];

    let i = 0;
    while (i < words.length) {
      // Check if any highlight phrase matches starting at i
      let matched = false;
      for (const phrase of highlights) {
        const phraseWords = phrase.split(" ");
        const slice = words.slice(i, i + phraseWords.length).join(" ");
        if (slice === phrase) {
          result.push(
            <span
              key={i}
              className="relative inline-block px-1 mx-[1px]"
            >
              {/* Background span - bottom half highlight */}
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 1 }}

               className="absolute bottom-0 left-0 w-full h-1/3 bg-[#FF6D00] z-0 rounded-sm" />
              <span className="relative z-10">{phrase}</span>
            </span>
          );
          i += phraseWords.length;
          matched = true;
          break;
        }
      }
      if (!matched) {
        result.push(<span key={i} className="">{words[i]} </span>);
        i++;
      }
    }

    return result;
  };
  return (
    <div className='h-screen w-full bg-[#F8FFE5] relative'>
      <div className='h-[85%] w-full bg-[#34E89E] rounded-b-[200px] relative shadow-2xl flex  flex-col items-center drop-shadow-2xl'>
        <div className='absolute top-2/12 left-12'>
          <Cursor message='UI/UX Designer' color="#CFC2FF"/>
        </div>
         <div className='absolute top-5/12 left-5/12'>
          <Cursor message='App developer' color="#B0EC9C" />
        </div>
        <div className='absolute bottom-2/12 left-1/12'>
          <Cursor message='Full-Stack Developer' color="#FF00DD"/>
        </div>
        <div className='absolute top-4/12 right-12'>
          <Cursor message='AI/ML Explorer' color="purple"/>
        </div>
        <div className='absolute bottom-2/12 right-1/12'>
          <Cursor message='System Architect' color="#AB0003"/>
        </div>
        
        <div className='  w-[60%] h-[25%] flex items-center justify-between'>
          <div className=''>
            <Circle big="#F8FFE5" small="#34E89E" text="Portfolio" />
          </div>
          <Tiny width={100} height={100} src='/hash.svg' />
          <Navbar />
        </div>
        <div className=' w-full h-full flex justify-center items-center overflow-hidden rounded-b-[200px]'>
            <Tiny width={150} height={150} src='/star.svg' />
          <div className=' w-[85%] h-full flex overflow-hidden justify-center '>
           
            <div className=' w-[25%] h-full   flex justify-end items-end pb-10'>

              <div className='relative translate-x-20 z-20' >
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
                <div className='absolute -right-26 -rotate-[24deg] -bottom-5'>
                  <ArrowSvg />
                </div>

              </div>

            </div>
            <div className=' w-[50%] h-full  flex  relative justify-start items-end '>
              <div className='absolute translate-x-30 z-10 w-[70%] h-full flex justify-center items-center  '>
                <Image src="/photo.png" alt="my photo" fill />
              </div>
              <div className='w-[100%]   h-full flex relative justify-center items-end top-[25%]'>
                <div className='bg-[#E0FF4F] w-[100%] h-[120%] rounded-full absolute'></div>
                <div className='bg-[#EFFFA3] w-[85%] h-[100%] rounded-full absolute'></div>
                <div className='bg-[#0F3443] w-[65%] h-[70%] rounded-full absolute'></div>
              </div>
              <div className='absolute top-0 right-0'>

               <Tiny width={150} height={150} src='/doubt.svg' />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Homepage
