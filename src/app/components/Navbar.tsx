"use client"
import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";
import Sidebar from './Sidebar';

interface NavbarProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const Navbar = ({isOpen, setIsOpen}:NavbarProps) => {


    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className='h-[100px] w-[320px] rounded-3xl bg-[#F8FFE5]   shadow-2xl drop-shadow-xl z-100'>
                <div className='flex justify-evenly items-center h-full w-full gap-10 fixed'>
                    <div className='h-[80%] w-[60%] bg-[#34E89E] rounded-[20px]  flex justify-evenly   items-center'>
                        <div className='w-[25%] h-[60%] bg-[#34E89E] shadow-2xl drop-shadow-xl relative border-[0.5px] rounded-[15px] flex justify-center items-center'>
                            {/* Animated ring only */}
                            <motion.div
                                animate={{
                                    scale: [0, 1],
                                    opacity: [1, 0],
                                }}
                                transition={{
                                    duration: 0.9,
                                    repeat: Infinity,
                                    ease: "linear",
                                    repeatType: "loop",
                                    repeatDelay: 0.1,
                                }}
                                className='w-[85%] h-[85%] border-6 border-[#0F3443] rounded-full absolute'

                            />
                            {/* Static child circle */}
                            <div className='w-[40%] h-[40%] bg-[#0F3443] rounded-full z-10'></div>
                        </div>

                        <div className='text-2xl  text-[#0F3443] font-playfair font-[800]'>Available</div>
                    </div>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={isOpen ? "close" : "menu"}
                            onClick={toggleSidebar}
                            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                            animate={{ opacity: 1, rotate: 0, scale: 1 }}
                            exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                            transition={{ duration: 0.3 }}
                        >
                            {isOpen ? (
                                <IoCloseSharp    size={40} color="#34E89E" />
                            ) : (
                                <GiHamburgerMenu size={40} color="#34E89E" />
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
             <Sidebar isOpen={isOpen} />
        </>
    )
}

export default Navbar

