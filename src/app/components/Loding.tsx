'use client'
import React from 'react'
import { motion } from 'framer-motion'

const Loading = ({ onFinish }: { onFinish: () => void }) => {
  return (
    <div className="fixed inset-0 z-[100] overflow-hidden">
      {/* Layer 1 */}
      <motion.div
        className="absolute h-screen top-0 left-0 w-[100vw] bg-[#E0FF4F]"
        initial={{ width: '100%' }}
        animate={{ width: '0%' }}
        transition={{ duration: 1.5, ease: [0.65, 0, 0.35, 1], delay: 0.3 }}
        style={{ willChange: 'width' }}
      />
      {/* Layer 2 */}
      <motion.div
        className="absolute h-screen top-0 left-0 w-[100vw] bg-[#EFFFA3]"
        initial={{ width: '100%' }}
        animate={{ width: '0%' }}
        transition={{ duration: 1.5, ease: [0.65, 0, 0.35, 1], delay: 0.2 }}
        style={{ willChange: 'width' }}
      />
      {/* Layer 3 */}
      <motion.div
        className="absolute h-screen top-0 left-0 w-[100vw] bg-[#0F3443]"
        initial={{ width: '100%' }}
        animate={{ width: '0%' }}
        transition={{ duration: 1.5, ease: [0.65, 0, 0.35, 1], delay: 0.1 }}
        onAnimationComplete={onFinish}
        style={{ willChange: 'width' }}
      />
    </div>
  )
}

export default Loading
