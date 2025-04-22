"use client"
import React from 'react'
import { motion } from "motion/react"
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';

interface SidebarProps {
    isOpen: boolean;
}

const items = [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "About", href: "/about" },
    { id: 3, name: "Experience", href: "/experience" },
    { id: 4, name: "Contact", href: "/contact" },
    { id: 5, name: "Blog", href: "/blog" },

]

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
     const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
    const pathname = usePathname();
    const isActive = (path: string) => {
        return pathname === path;
    };
    return (
        <motion.div
            initial={{ borderTopRightRadius: "350px", borderBottomRightRadius: "350px" }}
            animate={{
            display: isOpen ? "block" : "none",
            x: isOpen ? 0 : -2000,
            borderTopRightRadius: isOpen ? (isTabletOrMobile ? "50px" : "100px") : "350px",
            borderBottomRightRadius: isOpen ? (isTabletOrMobile ? "50px" : "100px") : "350px",
            }}
            transition={{ duration: 1, ease: "easeInOut" }}  
            exit={{ x: -2000, borderTopRightRadius: "350px", borderBottomRightRadius: "350px" }}
            className={`h-screen z-90 lg:w-[50%] w-[98%] bg-[#0F3443] absolute top-0 left-0 shadow-[60px_0_100px_rgba(0,0,0,0.4)] overflow-hidden`}
        >
            <div className='h-full w-full bg-[#0F3443] flex flex-col justify-center items-start'>
            {items.map((item) => (
                <div
                key={item.id}
                className='text-[#F8FFE5] text-[4rem] ml-28 font-playfair font-[800] p-2 overflow-hidden'>
                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: isOpen ? 0 : 1000 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1, delay: item.id * 0.1, ease: "easeInOut" }}
                    className={`${isActive(item.href) ? "text-[#34E89E]" : "text-[#F8FFE5]"} cursor-pointer`}>
                    <Link href={item.href}>{item.name}</Link>
                </motion.div>
                </div>
            ))}
            </div>
        </motion.div>
    )
}

export default Sidebar
