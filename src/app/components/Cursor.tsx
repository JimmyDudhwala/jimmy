"use client"

import { useState, useEffect } from "react"
import { motion, useSpring, useTransform, useMotionValue } from "framer-motion"

interface CursorProps {
  color: string
  message: string
}

const Cursor = ({ color, message }: CursorProps) => {
  const [isHovering, setIsHovering] = useState(false)

  // Create motion values for tracking mouse position
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Create spring animations for smooth following
  // The lower the damping and stiffness, the more "floaty" the following effect
  const springConfig = { damping: 25, stiffness: 120 }
  const followX = useSpring(mouseX, springConfig)
  const followY = useSpring(mouseY, springConfig)

  // Transform the values to reduce the movement (only follow slightly)
  // Dividing by 15 means the cursor will only move about 1/15th of the actual mouse movement
  const cursorX = useTransform(followX, (x) => x / 15)
  const cursorY = useTransform(followY, (y) => y / 15)

  // Track mouse movement across the entire document
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Update the motion values with the mouse position relative to the center of the screen
      mouseX.set(e.clientX - window.innerWidth / 2)
      mouseY.set(e.clientY - window.innerHeight / 2)
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [mouseX, mouseY])

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{
        scale: 1,
      }}
      style={{
        x: cursorX,
        y: cursorY,
      }}
      transition={{
        duration: 0.5,
        delay: 2.5,
        x: { type: "spring", damping: 25, stiffness: 120 },
        y: { type: "spring", damping: 25, stiffness: 120 },
      }}
      className="relative inline-block"
    >
      {/* Tooltip that appears on hover */}
      <div
        className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1.5 bg-white text-sm font-medium rounded-md shadow-md 
        transition-all duration-300 whitespace-nowrap z-50
        ${isHovering ? "opacity-100 translate-y-0 " : "opacity-0 translate-y-1 pointer-events-none"}
        border border-gray-100 text-gray-800`}
        style={{
          background: `linear-gradient(135deg, #ffffff, #f5f5f5)`,
        }}
      >
        <span className="font-semibold" style={{ color }}>
          {message}
        </span>
        {/* Arrow pointing down */}
        <div className="absolute -bottom-1.5 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rotate-45 border-r border-b border-gray-100"></div>
      </div>

      {/* Original SVG cursor */}
      <div
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className="cursor-pointer transition-transform duration-300 hover:scale-115 hover:rotate-12"
      >
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M2.46802 3.04559C2.31824 2.6643 2.66251 2.28769 3.04101 2.37416L3.11695 2.3977L23.1789 10.3149C23.5899 10.4775 23.5951 11.0404 23.223 11.2258L23.1443 11.2575L15.8739 13.5276C14.8478 13.8481 14.0294 14.6207 13.648 15.6175L13.5781 15.8197L11.2963 23.0865C11.1638 23.5082 10.6034 23.5536 10.3916 23.1962L10.3537 23.1195L2.46802 3.04559Z"
            fill={color}
            stroke="white"
            strokeWidth="3"
          />
        </svg>
      </div>
    </motion.div>
  )
}

export default Cursor
