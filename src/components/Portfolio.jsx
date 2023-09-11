import React from 'react'
import reactimage from '../assets/react.png'
import firebase from '../assets/firebase.png'
import tailwind from '../assets/tailwind.png'
import github from '../assets/github.png'

const Portfolio = () => {
  return (
    <div name="portfolio" className='w-full h-screen pt-[60px] pb-[60px] bg-[#F3E5FA] flex flex-col items-center overflow-auto'>
      
      <div className='flex pt-[50px]'>
        <img src={reactimage} alt="" className='rounded-lg w-12 h-12 sm:w-24 sm:h-24' />
        <img src={tailwind} alt="" className='rounded-lg w-12 h-12 sm:w-24 sm:h-24' />
        <img src={firebase} alt="" className='rounded-lg sw-12 h-12 m:w-24 sm:h-24' />
      </div>

      <div className='pt-[20px] sm:pt-[50px] font-bold text-lg sm:text-3xl'>
        Personal Portfolio
      </div>

      <div className='max-w-[300px] sm:max-w-[700px] mx-auto text-left'>

        <div className='py-4'>
          <p className='pt-[10px] font-bold text-lg sm:text-2xl'>About</p>
          <p className='text-s sm:text-lg'>
            Welcome to my personal portfolio! I used React for structuring, Tailwind CSS for styling, and Firebase to deploy the site. 
          </p>
        </div>
        
        <div className="py-4">
          <p className='font-bold text-lg sm:text-2xl'>Goal</p>
          <p className='text-s sm:text-lg'>
            The goal of this project was to elevate my React skills within a creative passion project which will help document my progress in learning new tools and frameworks.
            I placed emphasis on front-end creativity, learning React routing, and incorporating JavaScript effects to make a more engaging and dynamic user interface.
            I specifically chose to incorporate Tailwind CSS to solidify my skills of efficient app building with a modern CSS framework. 
          </p>
        </div>
        
        <div className="py-4">
          <p className='font-bold text-lg sm:text-2xl'>Reflection</p>
          <p className='text-s sm:text-lg'>
            Overall, this was a fun project where I had a lot of freedom focusing on how the final product would appear. 
            I dove deeper into designing processes and planned out my layout and styling coordinations with the help of tools like Figma and coolors.co. 
            Furthermore, I further honed user focused developing skills to create responsive designs. 
          </p>
        </div>
    
      </div>
      
      <a href="https://github.com/simd22/simd22.github.io" target="_blank" rel="noopener noreferrer">
        <button className='bg-pink-600 text-[#F3E5FA] group border-2 px-9 py-3 my-2 flex items-center rounded-full hover:bg-[#0019C1] hover:border-[#0019C1] hover:text-[#FCF9DC]'>
          <p className='pr-3'>See Code</p>
          <img src={github} alt="link to github" className='w-[20px] h-[20px]' />
        </button>
      </a>

    </div>
  )
}

export default Portfolio