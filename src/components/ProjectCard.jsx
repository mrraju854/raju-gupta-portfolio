import { span } from 'framer-motion/m'
import React from 'react'

const ProjectCard = ({title, features, image, tech, icons, demo, code}) => {
  return (
    <div className='bg-gray-700 rounded-2xl overflow-hidden hover:-translate-y-2 transition duration-300 cursor-pointer'>
      <img src={image} alt={title} className='w-full h-51 object-cover'/>
      <div className='px-3 py-5'>
        <h3 className='text-xl font-semibold mb-1'>{title}</h3>
        <div className='mb-4'>
          <ul className='space-y-[0.5] text-gray-300 text-[15px]'>
            {features.map((feature, index) => (
            <li key={index} className='flex items-start gap-2'>
            <span className='text-purple-400 '>●</span>
            <span>{feature}</span>
            </li>
            ))}
          </ul>
        </div>

        <div className='flex flex-wrap gap-2 mb-6'>
            {tech.map((item, index) => (
                <span className='px-3 py-1 bg-gray-600 rounded-lg text-sm' key={index}>{item}</span>
            ))}
        </div>

        <div className='flex gap-2'>
            <a href={demo} target="_blank" rel="noopener noreferrer" className='flex-1 text-center px-4 py-2 bg-purple-500 rounded-lg font-medium hover:bg-purple-700 transition duration-300'>Live Demo
            </a>
            <a href={code} target="_blank" rel="noopener noreferrer" className='flex-1 text-center px-4 py-2 border border-purple-500 font-medium rounded-lg hover:bg-purple-500/40 transition duration-300 '>View Code
            </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
