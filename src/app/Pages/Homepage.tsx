import React from 'react'
import Navbar from '../components/Navbar'
import Circle from '../components/Circle'

const Homepage = () => {
  return (
    <div className='h-screen w-full bg-[#F8FFE5]'>
      <div className='h-[85%] w-full bg-[#34E89E] rounded-b-[200px] relative '>
        <div className=' '>
          <Circle  big="#F8FFE5" small="#34E89E" />
         
        </div>
        <div className=''>  
          <Navbar/>
        </div>
      </div>
    </div>
  )
}

export default Homepage
