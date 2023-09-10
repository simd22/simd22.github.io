import React from 'react'
// import portf from '../assets/portfolio.png'

const Portfolio = () => {
  return (
    <div name="portfolio" className='w-full h-screen pt-[60px] pb-[60px] bg-[#F3E5FA] flex flex-col items-center overflow-auto'>

      {/* <div className='w-[350px] sm:w-1/2 mx-auto pt-[50px]'>
        <img src={portf} alt="" className='rounded-lg'/>
      </div> */}

      <div className='pt-[20px] sm:pt-[50px] font-bold text-lg sm:text-3xl'>
        Personal Portfolio
      </div>

      <div className='max-w-[300px] sm:max-w-[700px] mx-auto text-left'>

        <div className='py-4'>
          <p className='pt-[10px] font-bold text-lg sm:text-2xl'>About</p>
          <p className='text-s sm:text-lg'>
            Welcome to my personal portfolio! I used React for backend function, Tailwind CSS for styling, and Firebase to deploy the site. 
          </p>
        </div>
        
        <div className="py-4">
          <p className='font-bold text-lg sm:text-2xl'>Goal</p>
          <p className='text-s sm:text-lg'>
            The goal of this project was to elevate my React skills into a creative passion project which will help document my progress in learning new languages and frameworks.
            I placed emphasis on front-end creativity, learning React routing, and incorporating more JavaScript animation and effects to make a more engaging and dynamic user interface.
            I specifically chose to incorporate Tailwind CSS to solidify my skills of efficient and reliable app building with a modern CSS framework. 
          </p>
        </div>
        
        <div className="py-4">
          <p className='font-bold text-lg sm:text-2xl'>Reflection</p>
            Overall, this was a fun project where I had a lot of freedom focusing on how the final product would appear. 
            I dove deeper into designing processes and planned out my layout and styling coordinations with the help of tools like Figma and coolors.co. 
            Furthermore, I further honed user focused developing skills to create responsive designs. 
          <p className='text-s sm:text-lg'>

          </p>
        </div>
    
      </div>
      
      {/* <div>
      <a
        href="https://spotify-clone-922c2.web.app/" // Replace with the URL of the external website
        target="_blank"              // Open the link in a new tab or window
        rel="noopener noreferrer"     // Recommended for security when using target="_blank"
      >
        <button className='bg-pink-600 text-[#F3E5FA] group border-2 px-6 py-3 my-2 flex items-center rounded-full hover:bg-[#E4F8E6] hover:border-[#E4F8E6] hover:text-[#4CAF50]'>
          See Final Product
        </button>
      </a>

    </div> */}

    </div>
  )
}

export default Portfolio