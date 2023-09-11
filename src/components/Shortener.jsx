import React from 'react'
import short from '../assets/shortener.png'
import github from '../assets/github.png'

const Shortener = () => {
  return (
    <div name="shortener" className='w-full h-screen pt-[60px] pb-[60px] bg-[#F3E5FA] flex flex-col items-center overflow-auto'>
      
      <div className='w-[350px] sm:w-1/2 mx-auto pt-[50px]'>
        <img src={short} alt="" className='rounded-lg'/>
      </div>

      <div className='pt-[20px] sm:pt-[50px] font-bold text-lg sm:text-3xl'>
        Shorten Pls
      </div>

      <div className='max-w-[300px] sm:max-w-[700px] mx-auto text-left'>
        <div className='py-4'>
          <p className='pt-[10px] font-bold text-lg sm:text-2xl'>About</p>
          <p className='text-s sm:text-lg'>
            In Shorten Pls, I used Express.js and MongoDB to create a functioning URL shortener utilizing a backend, user interface, and database. 
            I used a MongoDB database to display the history of user-entered links, shortened links, and the amount of times a shortened link was clicked. 
            Furthermore, with Mongoose, I defined a data schema that governed how the short and long links would be handled within the database. 
          </p>
        </div>
        
        <div className="py-4">
          <p className='font-bold text-lg sm:text-2xl'>Goal</p>
          <p className='text-s sm:text-lg'>
            The goal of this project was to gain a deeper understanding of how data is processed and transferred between a database and a server, with a specific emphasis on GET and POST requests.
            I sought to implement these processes with popular tools like MongoDB and Express.js.  
          </p>
        </div>
        
        <div className="py-4">
          <p className='font-bold text-lg sm:text-2xl'>Reflection</p>
          <p className='text-s sm:text-lg'>
            Throughout this project, I dove deeper into server-side and database-side processing of requests and
            I successfully implemented an Express server that communicated with a MongoDB database. 
            Overall, I gained a better understanding for utilizing a database within a project, which is an important step towards creating more complex projects.
            Furthermore, I refined my HTML, CSS, and JavaScript capabilities while learning how to use EJS to embed JavaScript code dynamically.
          </p>
        </div>
      </div>
      
      <a href="https://github.com/simd22/ShortenPls" target="_blank" rel="noopener noreferrer">
      <button className='bg-pink-600 text-[#F3E5FA] group border-2 px-9 py-3 my-2 flex items-center rounded-full hover:bg-[#0019C1] hover:border-[#0019C1] hover:text-[#FCF9DC]'>
          <p className='pr-3'>See Code</p>
          <img src={github} alt="link to github" className='w-[20px] h-[20px]' />
        </button>
      </a>

    </div>
  )
}

export default Shortener