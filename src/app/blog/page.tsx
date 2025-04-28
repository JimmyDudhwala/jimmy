import React from 'react'
import { FaTools } from 'react-icons/fa' // icon import
import Image from 'next/image'

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f9f9f9] p-6 text-center">
      <FaTools className="text-6xl text-blue-600 mb-4 animate-bounce" />
      <h1 className="text-5xl font-bold text-gray-800 mb-4">Under Maintenance</h1>
      <p className="text-lg text-gray-600 mb-6 max-w-md">
        We're making some improvements to serve you better. Please check back soon!
      </p>
      {/* <div className="relative w-80 h-80">
        <Image
          src="/maintenance.png" // replace this with your image path
          alt="Maintenance"
          layout="fill"
          objectFit="contain"
        />
      </div> */}
    </div>
  )
}

export default page
