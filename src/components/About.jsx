import { easeOut, motion } from 'framer-motion'
import {aboutInfo, assets} from '../assets/assets.js'

const About = () => {
  return (
    <motion.div 
    initial={{opacity:0, y:50}}
    whileInView={{opacity:1, y:0}}
    transition={{duration: 0.6, ease: 'easeOut'}}
    viewport={{once: true}}
    id='About'
    className='scroll-mt-10 py-20 bg-[#1a1a1a]'
    >
      <div className='container mx-auto px-6'>
        <h2 className='text-3xl font-bold text-center mb-4'>About 
        <span className='text-purple-500'>Me</span></h2>
        <p className='text-gray-400 text-center max-w-2xl mx-auto mb-10'>Get to know more about my background and passion</p>

        <div className='flex flex-col md:flex-row items-center gap-12'>
            <div className='md:w-1/2 rounded-2xl overflow-hidden'>
                <motion.img 
                initial={{opacity:0, y:50}}
                whileInView={{opacity:1, y:0}}
                transition={{duration: 0.9, ease: 'easeOut'}}
                viewport={{once: false, amount:0.2}}
                className='w-full h-full object-cover rounded-2xl'
                src={assets.profileImage} alt="Profile" />
            </div>

            <motion.div
            initial={{opacity:0, y:50}}
            whileInView={{opacity:1, y:0}}
            transition={{duration: 0.9, ease: 'easeOut'}}
            viewport={{once: false, amount:0.2}} 
            className='md:w-1/2'>
                <div className='rounded-2xl p-8'>
                    <h3 className='text-3xl font-semibold mb-6'>My Journey</h3>

                    <p className='text-gray-300 mb-6'>My journey into web development started with curiosity about how websites work behind the scenes. I began learning HTML, CSS, and JavaScript, gradually building responsive and interactive web applications. Over time, I developed a strong interest in creating clean user interfaces and improving user experiences.</p>

                    <p className='text-gray-300 mb-3'> Currently, I focus on React.js and Tailwind CSS while continuously expanding my knowledge of modern web technologies. I have built projects such as an Employee Management Dashboard, Weather App, Hulu Clone, and various frontend applications that have strengthened my problem-solving and development skills.</p>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        {
                            aboutInfo.map((data, index) =>{
                                return (<div key={index} className='bg-gray-700 rounded-2xl p-6 transition-transform duration-300 hover:translate-y-2 cursor-pointer'>
                                    <div className='text-purple-500 text-4xl mb-4'>
                                        <data.icon />
                                        
                                    </div>
                                    <h3 className='text-xl font-semibold mb-3'>{data.title}</h3>
                                    <p className='text-gray-400'>{data.description}</p>
                                </div>
                                )
                            })
                        } 
                    </div>
                </div>
            </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default About
