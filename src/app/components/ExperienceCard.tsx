import Image from 'next/image'
import React from 'react'

interface ExperienceCardProps {
  year: string;
  role: string;
  componyName: string;
}



const ExperienceCard = ({year, componyName, role}:ExperienceCardProps) => {
  return (
<div 
  className='relative p-8 group w-full max-w-[550px] lg:h-[550px] h-[350px] rounded-[20px] shadow-xl flex flex-col items-center justify-between overflow-hidden'
  style={{
    backgroundColor: "#e6dbc2",
    backgroundImage: `
      url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 100 100'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.3' fill='%23d9c7a0'/%3E%3C/svg%3E"),
      url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cfilter id='grainTexture'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.4' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23grainTexture)' opacity='0.15' fill='%23c5b186'/%3E%3C/svg%3E")
    `,
    backgroundBlendMode: "overlay, multiply"
  }}
>
  <div>
  <div className="lg:text-4xl text-2xl text-black/50 font-bold">{year}</div>
  <div className='lg:text-7xl text-4xl text-black/70 font-bold'>{componyName}</div>
  </div>
  <div className='lg:text-8xl text-5xl text-black/90 font-bold '>{role}</div>
</div>
  )
}

export default ExperienceCard
