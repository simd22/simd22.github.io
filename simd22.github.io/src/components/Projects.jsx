import React from 'react'
// Import project images here
import WorkImg from '../assets/workImg.jpeg'
import { Link as RouterLink } from 'react-router-dom';

const Projects = () => {
  return (
    <div name='projects' className='w-full md:h-screen text-black bg-[#F3E5FA]'>
        <div className='max-w-[1100px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-pink-600 border-pink-600'>Projects</p>
                <p className='text-2xl py-6'>Check out some ways that I've learned new concepts!</p>
            </div>
            
            {/* CONTAINER */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 '>

                {/* SPOTIFY GRID ITEM */}
                <div className='flex flex-col space-y-2'>

                    {/* PICTURE */}
                    <RouterLink to="/spotify">
                        <div style={{ backgroundImage: `url(${WorkImg})`}} 
                        className='hover:scale-105 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div hover:scale-1.02 transform transition-transform duration-200 ease-in-out'>
                            
                            {/* Hover Effects */}
                            <div className='opacity-0 group-hover:opacity-100'>
                                <span className='text-2xl font-bold text-gray-700 tracking-wider'>
                                    React JS Application
                                </span>
                            </div>
                        </div>
                    </RouterLink>

                    {/* CAPTION */}
                    <div className='pt-4 flex flex-col items-center space-y-2'>
                        <div className='pr-8'>
                            <p className='text-pink-600 text-xl font-bold'>Personalizing Spotify</p>
                        </div>
                        {/* React, HTML, CSS, JavaScript, Firebase */}
                        <div className='flex justify-center space-x-2'>
                            <p class="bg-[#FCF9DC] text-[#DF9ECD] bg-opacity-70 text-opacity-80 px-2 py-1 rounded-full text-s cursor-pointer hover:bg-blue-300 hover:text-blue-900 transition duration-300">React</p>
                            <p class="bg-[#FCF9DC] text-[#DF9ECD] bg-opacity-70 text-opacity-80 px-2 py-1 rounded-full text-s cursor-pointer hover:bg-blue-300 hover:text-blue-900 transition duration-300">Spotify API</p>
                            <p class="bg-[#FCF9DC] text-[#DF9ECD] bg-opacity-70 text-opacity-80 px-2 py-1 rounded-full text-s cursor-pointer hover:bg-blue-300 hover:text-blue-900 transition duration-300">Firebase</p>
                            <p class="bg-[#FCF9DC] text-[#DF9ECD] bg-opacity-70 text-opacity-80 px-2 py-1 rounded-full text-s cursor-pointer hover:bg-blue-300 hover:text-blue-900 transition duration-300">Material UI</p>
                        </div>
                    </div>
                </div>

                {/* SHORTENER GRID ITEM */}
                <div className='flex flex-col space-y-2'>
                    <div style={{ backgroundImage: `url(${WorkImg})`}} 
                    className='hover:scale-105 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div hover:scale-1.02 transform transition-transform duration-200 ease-in-out'>
                        
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-gray-700 tracking-wider'>
                                React JS Application
                            </span>
                        </div>
                    </div>
                    {/* Caption */}
                    <div className='pt-4 flex flex-col items-center space-y-2'>
                        <div className='pr-8'>
                            <p className='text-pink-600 text-xl font-bold'>URL Shortener</p>
                        </div>
                        {/* React, HTML, CSS, JavaScript, Firebase */}
                        <div className='flex justify-center space-x-2'>
                            <p class="bg-[#FCF9DC] text-[#DF9ECD] bg-opacity-70 text-opacity-80 px-2 py-1 rounded-full text-s cursor-pointer hover:bg-blue-300 hover:text-blue-900 transition duration-300">HTML</p>
                            <p class="bg-[#FCF9DC] text-[#DF9ECD] bg-opacity-70 text-opacity-80 px-2 py-1 rounded-full text-s cursor-pointer hover:bg-blue-300 hover:text-blue-900 transition duration-300">CSS</p>
                            <p class="bg-[#FCF9DC] text-[#DF9ECD] bg-opacity-70 text-opacity-80 px-2 py-1 rounded-full text-s cursor-pointer hover:bg-blue-300 hover:text-blue-900 transition duration-300">JS</p>
                            <p class="bg-[#FCF9DC] text-[#DF9ECD] bg-opacity-70 text-opacity-80 px-2 py-1 rounded-full text-s cursor-pointer hover:bg-blue-300 hover:text-blue-900 transition duration-300">MongoDB</p>
                        </div>
                    </div>
                </div>

                {/* PORTFOLIO GRID ITEM */}
                <div className='flex flex-col space-y-2'>
                    <div style={{ backgroundImage: `url(${WorkImg})`}} 
                    className='hover:scale-105 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div hover:scale-1.02 transform transition-transform duration-200 ease-in-out'>
                        
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-gray-700 tracking-wider'>
                                React JS Application
                            </span>
                        </div>
                    </div>
                    {/* Caption */}
                    <div className='pt-4 flex flex-col items-center space-y-2'>
                        <div className='pr-8'>
                            <p className='text-pink-600 text-xl font-bold'>Personal Portfolio</p>
                        </div>
                        {/* React, HTML, CSS, JavaScript, Firebase */}
                        <div className='flex justify-center space-x-2'>
                            <p class="bg-[#FCF9DC] text-[#DF9ECD] bg-opacity-70 text-opacity-80 px-2 py-1 rounded-full text-s cursor-pointer hover:bg-blue-300 hover:text-blue-900 transition duration-300">React</p>
                            <p class="bg-[#FCF9DC] text-[#DF9ECD] bg-opacity-70 text-opacity-80 px-2 py-1 rounded-full text-s cursor-pointer hover:bg-blue-300 hover:text-blue-900 transition duration-300">GitHub Pages</p>
                            <p class="bg-[#FCF9DC] text-[#DF9ECD] bg-opacity-70 text-opacity-80 px-2 py-1 rounded-full text-s cursor-pointer hover:bg-blue-300 hover:text-blue-900 transition duration-300">Tailwind CSS</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        
        
        

    </div>
  )
}

export default Projects