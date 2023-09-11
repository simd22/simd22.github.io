import React from 'react'
import bitmoji from '../assets/bitmoji.png'

const About = () => {
  return (
    <div name='about' className='w-full h-screen pt-[60px] bg-[#F3E5FA]'>
        {/* Container */}
        <div className='max-w-[1100px] mx-auto px-8 flex flex-col justify-center h-full md:flex-row md:items-center'>
            
            <div className='max-w-[650px] md:w-1/2 mt-4 md:mt-0 text-center'>
              <img src={bitmoji} alt='Headshot' className='mx-auto w-80 h-80 md:w-80 md:h-80' />
            </div>
            
            <div className='md:flex flex-col'>
                <h2 className='text-1xl sm:text-4xl font-bold text-pink-600'>Hey there! I'm Simeon!</h2>
                <p className='text-1xl sm:text-2xl text-black py-4 max-w-[900px]'>I’m an aspiring software engineer interested in product development. Originally from San Diego, CA, I enjoy 🏐 volleyball 🌊 surfing and 📖 exchanging novels!</p>
                <p></p>
            </div>

        </div>
    </div>
  )
};    

export default About