import Link from 'next/link';
import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

interface ButtonProp {
    text: string,
    link:string
}

const Button = ({text,link}:ButtonProp) => {
  return (
    <Link href={link} className='group parent w-fit h-fit p-2 pl-4 pr-4 flex items-center gap-3 justify-center border-4 border-[#0F3443] rounded-4xl bg-[#F8FFE5] drop-shadow-xl shadow-xl cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-95'>
      <div className='text-[#0F3443] text-2xl font-[600]'>{text}</div>
      <div>
        <FaArrowRightLong
          size={25}
          color='#0F3443'
          className='transition-all duration-500 ease-in-out group-hover:-rotate-45'
        />
      </div>
    </Link>
  )
}

export default Button
