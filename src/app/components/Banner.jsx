"use client";
import React from 'react'
import Carousel from './Carousel'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image';

const Banner = () => {
  let {scrollYProgress, scrollY} = useScroll();
  let y = useTransform(scrollYProgress,[0, 1],["0%","150%"]);
  

  
  return (
    <div className='w-full h-full flex items-end relative mb-7'>
        <motion.div style={{y:useTransform(scrollYProgress, [0,1], ['0%','1320%'])}} className='w-[75px] h-[75px] absolute top-0 left-2 bg-secundary -z-10'>
            
        </motion.div>
        <div className='flex w-[85%] h-[90%] bg-primary z-10 overflow-hidden'>
            <Carousel/>
        </div>
        <motion.div style={{y}} className='flex items-center justify-center bg-primary  w-[15%] h-full  absolute  right-0 overflow-hidden'>
          <img className='w-[85%]' src={"/logo-kubikando.svg"} alt='logo kubikando'/>
        </motion.div>
    </div>
  )
}

export default Banner