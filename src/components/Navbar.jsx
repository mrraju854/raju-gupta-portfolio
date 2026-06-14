import React, { useState } from 'react'
import { FaBars, FaDownload } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false)

  return (
    <nav className='fixed w-full z-50 backdrop-blur-sm py-4 px-8 bg-gray-800 shadow-lg'>
      <div className='container mx-auto flex justify-between items-center'>
        <div>
            <a href="" className='text-3xl font-bold text-white'>Raju
            <span className='text-purple-500 '>Gupta</span></a>
            <div className='w-4 h-4 bg-purple-500 rounded-full'></div>
        </div>
        <div className='hidden md:flex space-x-10'>
            <a href="#home" className='relative text-white/80 transition duration-300 hover:text-purple-500 group'>
                <span className='text-lg'>Home</span>
                <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full'></span>
            </a>
            <a href="#About" className='relative text-white/80 transition duration-300 hover:text-purple-500 group'>
                <span className='text-lg'>About</span>
                <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full'></span>
            </a>
            <a href="#Skills" className='relative text-white/80 transition duration-300 hover:text-purple-500 group'>
                <span className='text-lg'>Skills</span>
                <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full'></span>
            </a>
            <a href="#Projects" className='relative text-white/80 transition duration-300 hover:text-purple-500 group'>
                <span className='text-lg'>Projects</span>
                <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full'></span>
            </a>
            <a href="#Experience" className='relative text-white/80 transition duration-300 hover:text-purple-500 group'>
                <span className='text-lg'>Experience</span>
                <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full'></span>
            </a>
            <a href="#Contact" className='relative text-white/80 transition duration-300 hover:text-purple-500 group'>
                <span className='text-lg'>Contact</span>
                <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full'></span>
            </a>

            <a href="/Raju_Gupta_Resume.pdf" target="_blank" rel="noreferrer" className='flex px-3 text-purple-300 rounded-lg cursor-pointer hover:bg-purple-500 hover:text-white transition duration-400 py-1 border-2 border-purple-400 gap-1 justify-center items-center user-none'>Resume <FaDownload /></a>
        </div>

        <div className='md:hidden'>
            {
                showMenu ? 
                <FaXmark onClick={() =>setShowMenu(!showMenu)} className='text-2xl cursor-pointer' />:
                <FaBars onClick={() =>setShowMenu(!showMenu)} className='text-2xl cursor-pointer' />

            }
            
            
        </div>

      </div>

      {/* Mobile Menus */}

      {
        showMenu && (
            <div className='md:hidden mt-4 bg-gray-700 h-screen rounded-lg p-4 flex flex-col space-y-4 text-center justify-center'> 
                <a onClick={() =>setShowMenu(!showMenu)} href="#home" className='mt-1 relative text-white/80 transition duration-300 hover:text-purple-500 group'>
                <span className='text-[18.7px]'>Home</span>
                </a>
                <a onClick={() =>setShowMenu(!showMenu)} href="#About" className='mt-1 relative text-white/80 transition duration-300 hover:text-purple-500 group'>
                <span className='text-[18.7px]'>About</span>
                </a>
                <a onClick={() =>setShowMenu(!showMenu)} href="#Skills" className='mt-1 relative text-white/80 transition duration-300 hover:text-purple-500 group'>
                <span className='text-[18.7px]'>Skills</span>
                </a>
                <a onClick={() =>setShowMenu(!showMenu)} href="#Projects" className='mt-1 relative text-white/80 transition duration-300 hover:text-purple-500 group'>
                <span className='text-[18.7px]'>Projects</span>
                </a>
                <a onClick={() =>setShowMenu(!showMenu)} href="#Experience" className='mt-1 relative text-white/80 transition duration-300 hover:text-purple-500 group'>
                <span className='text-[18.7px]'>Experience</span>
                </a>
                <a onClick={() =>setShowMenu(!showMenu)} href="#Contact" className='mt-1 relative text-white/80 transition duration-300 hover:text-purple-500 group'>
                <span className='text-[18.7px]'>Contact</span>
                </a>

                <a href='#' className='flex px-3 text-purple-300 rounded-lg cursor-pointer active:bg-purple-500 active:text-white py-1 border-2 border-purple-400 gap-1 justify-center items-center user-none'>Resume <FaDownload /></a>
  
            </div>
        )
      }

    </nav>
  )
}

export default Navbar
