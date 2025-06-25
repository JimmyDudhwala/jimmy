"use client"
import React, { useEffect, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";
import Sidebar from './Sidebar';
import axios from 'axios';

interface NavbarProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const Navbar = ({isOpen, setIsOpen}:NavbarProps) => {

    const [status, setStatus] = useState<'Available' | 'Occupied'>('Available')
    const [isActive, setIsActive] = useState(true)

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    const fetchData = async () => {
        try {
          const result = await axios.get('http://16.170.203.105:5000/api/v1/getSlot', {
            withCredentials: true
          });
      
          const slot = result.data.currentSlot;
      
          setStatus(slot.status === 'available' ? 'Available' : 'Occupied');
          setIsActive(slot.isActive);
      
        } catch (error) {
          console.error('Error fetching slot:', error);
        }
      };
      
      

    useEffect( () => {
        // Initial fetch
        fetchData()
        console.log(status)
    
        // // Listen for new todos
        // socket.on('newTodo', (todo) => {
        //   setTodos((prev) => [...prev, todo]);
        // });
    
        // return () => socket.disconnect();
      }, []);

    return (
        <>
            <motion.div
             initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.8,
                duration: 1,
                ease: "easeInOut",
              }}
        
            className='h-[100px] w-[320px] rounded-3xl bg-[#F8FFE5]   shadow-2xl drop-shadow-xl z-100'>
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
                                className={`w-[85%] h-[85%] border-6 ${isActive ? "border-[#0F3443]": "border-red-500"} rounded-full absolute`}

                            />
                            {/* Static child circle */}
                            <div className={`w-[40%] h-[40%] ${isActive ? "bg-[#0F3443]": "bg-red-500"} rounded-full z-10`}></div>
                        </div>

                        <div className={`text-2xl   ${isActive ? "text-[#0F3443]": "text-red-500"} font-playfair font-[800]`}>{status}</div>
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
            </motion.div>
             <Sidebar isOpen={isOpen} />
        </>
    )
}

export default Navbar

