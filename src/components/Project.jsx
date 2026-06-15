import React from 'react'
import { easeOut, motion } from 'framer-motion'
import { projects } from '../assets/assets'
import ProjectCard from './ProjectCard'
import { FaArrowRight } from 'react-icons/fa'

const Project = () => {
  return (
    <motion.div
    initial={{opacity:0, y:50}}
    whileInView={{opacity:1, y:0}}
    transition={{duration: 0.5, ease:'easeOut'}}
    id='Projects'
    className='scroll-mt-20 py-20 bg-[#1a1a1a]'
    >
      <div className='container mx-auto px-6'>
        <h2 className='text-3xl font-bold text-center mb-4'>My 
        <span className='text-purple-500'>Projects</span></h2>
        <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>A selection of my recent work</p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
            {
                projects.map((project, index) =>(
                    <ProjectCard key={index} {...project} />
                ))
            }
        </div>

        <div className='text-center mt-12'>
            <a href="https://github.com/mrraju854" target='_blank' rel="noreferrer" className='inline-flex px-6 py-3 items-center border border-purple rounded-lg font-medium hover:bg-purple-500/40 transition duration-300'>
                <span>View More Projects</span>
                <FaArrowRight className='ml-2'/>
            </a>
        </div>
      </div>
    </motion.div>
  )
}

export default Project
