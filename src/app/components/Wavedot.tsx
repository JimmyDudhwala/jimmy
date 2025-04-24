"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface WavedotProps {
  year?: string
  title?: string
  text?: string
}

const Wavedot = ({
  year = "2024",
  title = "Milestone Achievement",
  text = "A brief description of this important milestone.",
}: WavedotProps) => {
  const [isActive, setIsActive] = useState(false)

  const handleActivate = () => setIsActive(true)
  const handleDeactivate = () => setIsActive(false)

  return (
    <div className="relative">
      {/* Dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{
          duration: 0.6,
          type: "spring",
          rotate: {
            repeat: isActive ? Number.POSITIVE_INFINITY : 0,
            ease: "linear",
            duration: 1.2,
          },
        }}
        viewport={{ once: true }}
        onMouseEnter={handleActivate}
        onMouseLeave={handleDeactivate}
        onClick={() => setIsActive(!isActive)}
        animate={isActive ? { rotate: 360 } : { rotate: 0 }}
        className="lg:w-20 lg:h-20 w-5 h-5 rounded-full border-2 border-dashed lg:border-6 border-[#0F3443] bg-transparent flex items-center justify-center cursor-pointer"
      >
        <div className="w-2.5 h-2.5 lg:w-10 lg:h-10 rounded-full border-2 lg:border-4 border-[#0F3443] bg-[#0F3443]" />
      </motion.div>

      {/* Popup */}
      <AnimatePresence>
        {isActive && (
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 lg:mt-5  min-w-[120px] lg:min-w-[480px]">
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -5, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 500, damping: 25 }}
              className="relative"
            >
              <div className="bg-white px-6 py-5 rounded-xl border-2 border-[#0F3443] shadow-xl space-y-3 ">
                <p className="text-sm lg:text-2xl rotate-180 lg:rotate-y-0 rotate-y-180 text-gray-700 leading-relaxed">
                  {text}
                </p>
                <h3 className="text-base lg:text-3xl rotate-180 lg:rotate-y-0 rotate-y-180 font-extrabold text-[#0F3443]">
                  {title}
                </h3>
                 
                {/* Year */}
                <div className="inline-block p-3 rotate-180 bg-[#0F3443] lg:rotate-y-0 rotate-y-180 text-white text-sm lg:text-4xl font-semibold rounded">
                  {year}
                </div>

                {/* Title */}
                

                {/* Text */}
               

                {/* Background border effect */}
                <div className="absolute top-1 left-1 right-1 bottom-1 opacity-10 border border-[#0F3443] rounded-xl pointer-events-none" />
              </div>

              {/* Connector arrow */}
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-[#0F3443]" />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Wavedot