import Image from 'next/image'
import React from 'react'

interface TinyProps {
  height: number;
  width: number;
  src: string;
}

const Tiny: React.FC<TinyProps> = ({ height, width, src }) => {
  return (
    <div className={`relative z-10  rounded-full overflow-hidden flex justify-center items-center h-[${height}px] w-[${width}px]`}>
      <div className='absolute bg-[#E0FF4F] rounded-full -z-10 h-1/2 w-1/2  blur-xl  '></div>
  
      <Image src={src} alt="Tiny" height={height} width={width} />
    </div>
  )
}

export default Tiny
