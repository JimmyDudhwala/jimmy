import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const Sketch = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true }) // `once: true` ensures it only triggers once

  return (
    <div ref={ref}>
      <svg width="490" height="400" viewBox="0 0 577 436" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d="M28 185.776C122.029 113.213 130.032 83.7336 180.047 56.5225C230.063 29.3113 42.0044 299.156 104.024 353.578C166.043 408 338.097 2.10023 402.117 29.3113C466.137 56.5224 274.077 408 338.097 408C402.117 408 510.15 174.438 540.16 185.776C570.169 197.113 514.152 408 514.152 408"
          stroke="#FF0000"
          strokeWidth="55"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: isInView ? 1 : 0 }}
          transition={{
            delay: 1,
            duration: 2.5,
            ease: 'easeInOut',
          }}
        />
      </svg>
    </div>
  )
}

export default Sketch
