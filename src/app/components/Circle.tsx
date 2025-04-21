"use client"
import { motion } from "framer-motion"

interface CircleProps {
  small: string;
  big: string;
  text: string
}

const Circle = ({ small, big, text }: CircleProps) => {
  // Outer circle radius = 90px, Inner circle radius = 30px
  const outerRadius = 90
  const innerRadius = 30
  const orbitRadius = outerRadius - innerRadius

  // Function to calculate position based on clock position (1-12)
  interface Position {
    x: number;
    y: number;
  }

  const getPositionFromClock = (clockPosition: number): Position => {
    // Convert clock position to angle in radians
    // 12 o'clock is at -90 degrees (or -π/2 radians)
    // Each hour is 30 degrees (or π/6 radians)
    const angleInRadians = (clockPosition * 30 - 90) * (Math.PI / 180);

    // Calculate x and y coordinates
    const x = Math.cos(angleInRadians) * orbitRadius;
    const y = Math.sin(angleInRadians) * orbitRadius;

    return { x, y };
  };

  // Example: Position at 6 o'clock
  const clockPosition = new Date().getHours() % 12 || 12;
  const { x, y } = getPositionFromClock(clockPosition)

  return (
    <div className="relative flex justify-center items-center mt-10 ">
      <div
        className="absolute z-10 mb-5 font-playfair font-bold text-6xl text-[#0F3443] pointer-events-none"
        style={{ textShadow: "6px 6px 10px rgba(0, 0, 0, 0.3)" }}
      >
        {text}
      </div>
      <motion.div
        className={`relative h-[180px] w-[180px] rounded-full shadow-2xl drop-shadow-xl`}
        style={{ backgroundColor: big }}
        whileHover="hover"
      >
        {/* Create a wrapper for the inner circle that will rotate */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-0 h-0"
          variants={{
            hover: {
              rotate: 360,
              transition: {
                duration: 0.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              },
            },
          }}
        >
          {/* Position the inner circle at the orbit distance */}
          <div
            className={`absolute h-[60px] w-[60px] rounded-full shadow-2xl drop-shadow-xl flex items-center justify-center font-playfair font-extrabold text-2xl text-[#0F3443]`}
            style={{
              // Center the inner circle on the calculated position
              backgroundColor: small,
              top: y - innerRadius,
              left: x - innerRadius,
            }}
          >
            {clockPosition}
          </div>
        </motion.div>
      </motion.div>

    </div>
  )
}

export default Circle
