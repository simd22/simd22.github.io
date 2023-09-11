import React from 'react'
import Projects from './Projects';
import { Link as ScrollLink } from 'react-scroll';
import bitmoji from '../assets/bitmoji.png'
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen pt-[60px] bg-[#F3E5FA]'> 
        {/* Container */}
        <div className='max-w-[1100px] mx-auto px-8 flex flex-col justify-center h-full md:flex-row md:items-center'>
            
            {/* TEXT */}
            <div className='max-w-[650px] md:flex flex-col'>
                <h2 className='text-1xl sm:text-4xl font-bold text-pink-600'>Hi, I'm Simeon! {' '}
                    <div className="text-1xl sm:text-4xl text-[#0019C1]">
                        <Typewriter 
                            className="z-0"
                            options={{
                            strings: ['Learner', 'Leader', 'Explorer'],
                            autoStart: true,
                            loop: true,
                            cursor: '',
                            }}
                        />
                    </div>
                </h2>
                <p className='text-1xl sm:text-3xl py-4 '>I’m a student-athlete at Brown University studying Computer Engineering. I'm passionate about innovating reliable software products in tech that solve user needs.</p>

                <div className='flex'>
                    <ScrollLink activeClass="active" to="projects" smooth={true} duration={500}>
                        <button className='bg-pink-600 text-[#F3E5FA] group border-2 px-6 py-3 my-2 flex items-center rounded-full hover:bg-[#E4F8E6] hover:border-[#E4F8E6] hover:text-[#4CAF50]'>
                            See Projects
                        </button>
                    </ScrollLink>
                </div>
            </div>

            {/* IMAGE */}
            <div className='md:w-1/2 mt-4 md:mt-0 text-center'>
                <img src={bitmoji} alt='Headshot' className='mx-auto w-60 h-60 md:w-80 md:h-80' />
            </div>
        </div>
        <Projects />
    </div>
  )
}

export default Home