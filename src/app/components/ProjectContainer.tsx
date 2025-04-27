import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

interface ProjectContainerProp {
  src : string;
  title : string;
  link: string
}

const ProjectContainer = ({src, title, link}:ProjectContainerProp) => {
  return (
    <Link href={link} className='relative group w-full max-w-[550px] h-[350px] bg-gray-100/10 rounded-[20px] shadow-2xl flex flex-col items-center justify-between overflow-hidden transition-all duration-300 ease-in-out hover:shadow-[0_15px_30px_rgba(0,0,0,0.6)] hover:-translate-y-2'>
      
      {/* Top Bar */}
      <div className='w-full h-[10%] p-[5%] flex justify-start gap-2 items-center z-20'>
        <div className='w-[12px] h-[12px] rounded-full bg-red-500 shadow-md'></div>
        <div className='w-[12px] h-[12px] rounded-full bg-green-500 shadow-md'></div>
        <div className='w-[12px] h-[12px] rounded-full bg-yellow-400 shadow-md'></div>
      </div>

      {/* Foreground Image */}
      <div className="relative w-full h-[90%] flex items-center justify-center  overflow-hidden">
        <Image
          src={src}
          alt="Project Image"
          width={600}
          height={400}
          className="object-contain group-hover:scale-100 scale-90  transition-all duration-500 ease-in-out"
        />

        {/* Glassmorphism Bottom Bar */}
       <div className="absolute bottom-0 w-full h-[50%] opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out bg-gradient-to-t from-white/90 to-transparent z-10"></div>

    

        {/* Project Title */}
        <div className="absolute bottom-2 z-20">
          <h2 className="text-3xl md:text-2xl font-extrabold text-black opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out drop-shadow-2xl">
            {title}
          </h2>
        </div>

      </div>
    </Link>
  )
}

export default ProjectContainer
