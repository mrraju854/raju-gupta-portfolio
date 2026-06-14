import React from 'react'
import { easeOut, motion } from 'framer-motion'
import { FaEnvelope, FaDownload, FaGithub, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa6'

const Contact = () => {
  return (
    <motion.div
    initial={{opacity:0, y:50}}
    whileInView={{opacity:1, y:0}}
    transition={{duration:0.6, ease: 'easeOut'}}
    viewport={{once: false, amount:0.2}}
    id='Contact'
    className='scroll-mt-20 p-20 bg-[#1a1a1a]'
    >
      <div className='container mx-auto px-6'>
        <h2 className='text-3xl font-bold text-center mb-4'>Get In 
        <span className='text-purple-500'>Touch</span></h2>
        <p className='text-gray-400 text-center mx-w-2xl mx-auto mb-16'>Have a project in mind or want to collaborate? Let's Talk!</p>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-15 max-w-5xl mx-auto'>
            <div>
                <form action="https://api.web3forms.com/submit" method="POST" className='space-y-6'>
                <input type="hidden" name="access_key" value="ff154d83-ac72-41ed-86c7-9c6fc528661c" />
                    <div>
                        <label htmlFor="name" className='block text-gray-200 mb-2'>Your Name</label>
                        <input required name='name' className='w-full bg-gray-700 border border-gray-800 rounded-lg px-4 py-3 outline-none' type="text" />
                    </div>

                    <div>
                        <label htmlFor="email" className='block text-gray-200 mb-2'>Email Address</label>
                        <input required name='email' className='w-full bg-gray-700 border border-gray-800 rounded-lg px-4 py-3 outline-none' type="email" />
                    </div>

                    <div>
                        <label htmlFor="message" className='block text-gray-200 mb-2'>Your Message</label>
                        <textarea required name='message' className='w-full h-35 bg-gray-700 border border-gray-800 rounded-lg px-4 py-3 outline-none' type="text" />
                    </div>

                    <button type='submit' className='w-full px-6 py-3 bg-purple-500 rounded-lg font-medium hover:bg-purple-700 transition duration-300 cursor-pointer'>Send Message</button>
                </form>
            </div>

            <div className='space-y-7 mt-8'>
                <div className=' flex items-start'>
                    <a href='#' className='active:scale-110 transition-all flex px-12 text-purple-300 rounded-lg cursor-pointer hover:bg-purple-500 hover:text-white duration-300 py-2 border-2 border-purple-400 gap-1 justify-center items-center select-none'>Resume <FaDownload /></a>
                </div>

                <div className='flex items-start'>
                    <div>
                        <FaMapMarkerAlt className='text-purple-500 text-2xl mr-4' />
                    </div>
                    <div>
                        <h3 className='text-xl font-semibold mb-2'>Location</h3>
                        <p className='text-gray-400'>Banaras, Station Road</p>
                    </div>
                </div>

                <div className='flex items-start'>
                    <div>
                        <FaEnvelope className='text-purple-500 text-2xl mr-4' />
                    </div>
                    <div>
                        <h3 className='text-xl font-semibold mb-2'>Email</h3>
                        <p className='text-gray-400'>mr.raju.gmr@gmail.com</p>
                    </div>
                </div>

                <div className='flex items-start'>
                    <div>
                        <FaPhone className='text-purple-500 text-2xl mr-4' />
                    </div>
                    <div>
                        <h3 className='text-xl font-semibold mb-2'>Phone</h3>
                        <p className='text-gray-400'>+91 6393360567</p>
                    </div>
                </div>

                <div className='pt-3'>
                    <h3 className='text-xl font-semibold mb-5'>Follow Me</h3>
                    <div className='flex space-x-6'>

                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/raju-gupta-ab703a363/" className='w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-purple-500 hover:bg-purple-500 hover:text-white transition duration-300'><FaLinkedin className='w-7 h-7' /></a>

                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/mrraju854" className='w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-purple-500 hover:bg-purple-500 hover:text-white transition duration-300'><FaGithub className='w-7 h-7' /></a>

                    </div>
                </div>
            </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact
