'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Loading = ({ onFinish }: { onFinish: () => void }) => {
  return (
    <div className="fixed inset-0 z-100 overflow-hidden">
      <motion.div
        className="absolute h-screen top-0 left-0 w-[100vw] bg-[#E0FF4F]"
        animate={{ width: '0vw' }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute h-screen top-0 left-0 w-[100vw] bg-[#EFFFA3]"
        animate={{ width: '0vw' }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute h-screen top-0 left-0 w-[100vw] bg-[#0F3443]"
        animate={{ width: '0vw' }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        onAnimationComplete={() => {
          onFinish();
        }}
      />
    </div>
  )
}

export default Loading
