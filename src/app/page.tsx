"use client"
import React, { useState } from 'react'
import Homepage from './Pages/Homepage'
import Loading from './components/Loding'

const page = () => {
   const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative  overflow-x-hidden h-full ${isLoading ? 'overflow-hidden h-screen' : ''}`}>
        {isLoading && <Loading onFinish={() => setIsLoading(false)} />}
      <Homepage/>
    </div>
  )
}

export default page
