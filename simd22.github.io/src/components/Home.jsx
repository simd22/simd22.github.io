import React from 'react'
// import { HiArrowNarrowRight } from 'react-icons/hi';
import Projects from './Projects';
import { Link as ScrollLink } from 'react-scroll';

import gitHub from '../assets/github.png'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen pt-[60px] bg-[#F3E5FA]'> 
        {/* Container */}
        <div className='max-w-[1100px] mx-auto px-8 flex flex-col justify-center h-full md:flex-row md:items-center'>
            <div className='md:flex flex-col'>
                <h2 className='text-4xl sm:text-4xl font-bold text-pink-600'>Hi, I'm Simeon!</h2>
                <p className='text-2xl py-4 '>I’m a rising junior at Brown University studying Computer Engineering. I'm passionate about innovating reliable software products in tech that solve user needs.</p>
                
                {/* max-w-[700px] */}
                <div className='flex'>
                    <ScrollLink activeClass="active" to="projects" smooth={true} duration={500}>
                        <button className='bg-[#E4F8E6] text-[#4CAF50] group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 hover:text-[#F3E5FA]'>View Work 
                            {/* <span className='group-hover:rotate-90 duration-300'>
                                <HiArrowNarrowRight className='ml-3'/>
                            </span> */}
                        </button>
                    </ScrollLink>
                </div>
            </div>
            <div className='md:w-1/2 mt-4 md:mt-0 text-center'>
                <img src={gitHub} alt='Headshot' className='mx-auto w-60 h-60 md:w-60 md:h-60' />
            </div>
        </div>
        <Projects />
    </div>
  )
}

export default Home