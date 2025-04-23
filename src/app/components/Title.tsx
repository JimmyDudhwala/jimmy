"use client"
import { useState } from "react"
import Navbar from "./Navbar"
import ScrollLock from "./ScrollLock"
import { motion } from "framer-motion"
import { CgMouse } from "react-icons/cg"
import { FaAngleDoubleDown } from "react-icons/fa"

interface TitleProps {
  text: string
}

const Title = ({ text }: TitleProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <ScrollLock locked={isOpen}>
      <div
        className="relative bg-[#F8FFE5] h-screen w-full flex flex-col items-center justify-start overflow-hidden"
        style={{
          backgroundImage: `
            radial-gradient(circle, gray 1px, transparent 1px)
          `,
          backgroundSize: "30px 30px",
        }}
      >
        {/* Gradient overlay for fading dots at bottom */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            background: "linear-gradient(to bottom, transparent 70%, #F8FFE5 100%)",
          }}
        />

        <div className="lg:w-[60%] w-full h-[25%] flex justify-center lg:justify-end items-center z-90">
          <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>

        <div className="w-full h-full flex items-center justify-center z-10">
          <motion.div
            initial={{ rotate: 0, width: 0 }}
            animate={{ rotate: 14, width: "fit-content" }}
            transition={{
              rotate: { duration: 0.8, ease: "easeInOut" },
              width: { delay: 0.8, duration: 1, ease: "easeInOut" },
            }}
            className="lg:h-[50%] md:h-[30%] h-[45%] overflow-hidden border-l-[10px] border-r-[10px] border-[#FF6D00] flex flex-col items-center justify-center"
          >
            <div className="lg:-mx-[20px] -mx-[12px] flex justify-center items-center">
              <h1 className="lg:text-[120px] text-[60px] whitespace-nowrap font-[600] -rotate-[14deg] text-[#0F3443]">{text}</h1>
            </div>
          </motion.div>
        </div>

        <div className="w-[90%] h-[15%] flex flex-col gap-2 items-end justify-start z-10">
          <div className="flex flex-col gap-2 items-center justify-center">
            <div className="flex gap-2 items-center justify-start">
              <CgMouse size={30} color="#696868" />
            </div>
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 1, delay: 0.8, ease: "easeInOut", repeat: Infinity }}
            className="flex gap-2 items-center justify-start">
              <FaAngleDoubleDown size={20} color="#696868" />
            </motion.div>
          </div>
        </div>
      </div>
    </ScrollLock>
  )
}

export default Title
