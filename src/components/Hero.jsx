import React from 'react'
import { easeInOut, easeOut, motion } from 'framer-motion'
import {assets} from '../assets/assets.js'

const Hero = () => {
  return (
    <motion.div
    initial={{opacity:0, y:50}}
    whileInView={{opacity:1, y:0}}
    transition={{duration: 0.6, ease:'easeOut'}}
    viewport={{once: true}}
    id='home'
    className='min-h-screen flex items-center pt-28 md:pt-20 pb-16 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]'
    >

        <div className='container mx-auto px-6 flex flex-col md:flex-row items-center justify-between'>
            <div className='md:w-1/2 mb-10 md:mb-0'>
                <h1 className=' text-4xl md:text-6xl font-bold mb-4'>Hi, I'm <span className='text-purple-500'>Raju Gupta</span></h1>
                <h2 className='typewriter text-2xl md:text-4xl font-semibold mb-6'>Frontend Devloper</h2>
                <p className='text-lg text-gray-300 mb-8'>Frontend Developer specializing in React.js and JavaScript, focused on building responsive, scalable, and user-friendly web applications.</p>
                <div className=' flex gap-7'>
                    <a href="#Projects" className='px-6 py-3 bg-purple-500 rounded-lg font-medium hover:bg-purple-600 transition duration-300 text-lg'>View Work</a>
                    <a href="#Contact" className='px-6 py-3 border border-purple-500 rounded-lg font-medium hover:bg-purple-500 transition duration-300 text-lg'>Contact ME</a>
                </div>
            </div>

            <div className='md:w-1/2 flex justify-center'>
                <div className='relative w-64 h-64 md:w-80 md:h-80'>
                    <div className='absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-70'>
                        <motion.img animate={{y:[0, -20, 0]}}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "easeInOut"
                        }}  
                         className='relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover object-top z-10 animate-float' src={assets.profileImage} alt="profileImage" />
                    </div>
                </div>
            </div>
        </div>
      
    </motion.div>
  )
}

export default Hero
