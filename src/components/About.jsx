import React from 'react'
import gitHub from '../assets/github.png'
const About = () => {
  return (
    <div name='about' className='w-full h-screen pt-[60px] bg-[#F3E5FA]'>
        {/* Container */}
        <div className='max-w-[1100px] mx-auto px-8 flex flex-col justify-center h-full md:flex-row md:items-center'>
            
            <div className='md:w-1/2 mt-4 md:mt-0 text-center'>
                <img src={gitHub} alt='Headshot' className='mx-auto w-60 h-60 md:w-60 md:h-60' />
            </div>
            
            <div className='md:flex flex-col'>
                <h2 className='text-4xl sm:text-4xl font-bold text-pink-600'>Hey there! I'm Simeon!</h2>
                <p className='text-2xl text-black py-4 max-w-[1100px]'>I’m an aspiring software engineer interested in product development. Currently, at Johnson & Johnson MedTech, I work in the Maxframe Autostrut team learning software QA and medical device development. Originally from San Diego, CA, I enjoy 🏐 volleyball 🌊 surfing and 📖 exchanging novels!</p>
            </div>

        </div>
    </div>
  )
};    

export default About