import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SocialMedia = () => {
  return (
    <div className='w-full lg:h-[40vh] h-fit p-2   bg-[#F8FFE5]  flex items-center justify-center'>
        <div className='lg:w-[80%] w-[80%] relative  md:p-5  pb-5 lg:h-[60%] h-full border-4 rounded-4xl shadow-2xl drop-shadow-2xl border-black flex md:flex-row  flex-col justify-between items-center '>
            <div className='absolute lg:scale-80 lg:left-0 -left-10 scale-50 -top-25 md:bottom-[50%] lg:bottom-[40%]'>
                <svg width="179" height="192" viewBox="0 0 179 192" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M177.341 17.6887C178.288 18.6934 178.242 20.2756 177.237 21.2227L160.865 36.6567C159.86 37.6038 158.278 37.5571 157.331 36.5524C156.384 35.5478 156.43 33.9655 157.435 33.0184L171.988 19.2993L158.269 4.74646C157.322 3.7418 157.368 2.15957 158.373 1.21247C159.378 0.26536 160.96 0.312023 161.907 1.31669L177.341 17.6887ZM175.522 19.4036L175.448 21.9025C67.7278 18.7256 23.2933 46.5915 10.1644 81.054C3.54541 98.4284 4.64744 117.949 10.1464 136.96C15.6421 155.959 25.4757 174.251 36.0299 188.99L33.9973 190.446L31.9647 191.901C21.1565 176.808 11.0296 158.008 5.34332 138.349C-0.339627 118.702 -1.64097 97.9974 5.49194 79.274C19.8668 41.5409 67.557 13.7184 175.596 16.9047L175.522 19.4036Z" fill="#FF6D00"/>
            </svg>
            </div>
            <div className='absolute scale-75 text-center -top-[20%] left-[40%] md:-top-[30%] md:left-[25%] lg:-top-[45%] lg:left-[15%] -rotate-12 w-[160px] text-red-950 text-2xl'>
                stalking is not allowed
            </div>
            <div className='lg:text-5xl text-4xl lg:w-[60%] w-full lg:p-10 p-5  font-thin lg:leading-15  text-[#0F3443] flex items-center justify-center'>
                Collect my Online Footprints
            </div>
            <div className='flex justify-around items-center lg:w-[60%] gap-2  lg:gap-0  flex-wrap'>
                <Link href=""  className='p-2 lg:ml-3 bg-gray-400/10 rounded-2xl'>
                    <Image src="https://www.svgrepo.com/show/452229/instagram-1.svg" alt="github" width={90} height={90} className='cursor-pointer' />
                </Link >
                 <Link href=""  className='p-2 lg:ml-3 bg-gray-400/10 rounded-2xl'>
                    <Image src="https://www.svgrepo.com/show/448234/linkedin.svg" alt="github" width={90} height={90} className='cursor-pointer' />
                </Link >
                 <Link href=""  className='p-2 lg:ml-3 bg-gray-400/10 rounded-2xl'>
                    <Image src="https://www.svgrepo.com/show/349537/twitter.svg" alt="github" width={80} height={80} className='cursor-pointer' />
                </Link >
                 <Link href=""  className='p-2 lg:ml-3 bg-gray-400/10 rounded-2xl'>
                    <Image src="https://www.svgrepo.com/show/204929/behance.svg" alt="github" width={90} height={90} className='cursor-pointer' />
                </Link >
                
            </div>
        </div>
    </div>  
  )
}

export default SocialMedia
