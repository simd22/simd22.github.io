import React from 'react';
import spotify from '../assets/spotify.png';
import github from '../assets/github.png'

const Spotify = () => {
  return (
    <div name="spotify" className='w-full h-screen pt-[60px] pb-[60px] bg-[#F3E5FA] flex flex-col items-center overflow-auto'>

      <div className='w-[350px] sm:w-1/2 mx-auto pt-[50px]'>
        <img src={spotify} alt="" className='rounded-lg'/>
      </div>
      
      <div className='pt-[20px] sm:pt-[50px] font-bold text-lg sm:text-3xl'>
          Behind Spotify
      </div>

      <div className='max-w-[300px] sm:max-w-[700px] mx-auto text-left'>

        <div className='py-4'>
        <p className='pt-[10px] font-bold text-lg sm:text-2xl'>About</p>
        <p className='text-s sm:text-lg'>
          In this project, I created a React app resembling one of my favorite apps, Spotify. The project incorporated the Spotify API in several areas including user authentication and requesting user playlist and account information.
        </p>
        </div>
        
        <div className="py-4">
          <p className='font-bold text-lg sm:text-2xl'>Goal</p>
          <p className='text-s sm:text-lg'>
            The goal of this project was twofold: to dive into how a React app is structured with and understand how to implement APIs. 
            I specifically focused on using React hooks and the React Context API for sharing state information across components without relying on props.
          </p>
        </div>
        
        <div className="py-4">
          <p className='font-bold text-lg sm:text-2xl'>Reflection</p>
          <p className='text-s sm:text-lg'>
            After completing the project, I have a strong grasp of React and further honed my HTML, CSS, and JavaScript skills.
            Completing this project clarified how GET requests to and responses from APIs function in the context of a real-world application.
            Furthermore, this project demystified the behind the scenes of websites and apps resulting in a much greater appreciation for apps like Spotify throughout my life.
            However, now I can't stop picturing div containers on websites.
          </p>
        </div>
    
      </div>
      
      <div className='flex flex-col'>
        <a href="https://spotify-clone-922c2.web.app/" target="_blank" rel="noopener noreferrer">
          <button className='bg-pink-600 text-[#F3E5FA] group border-2 px-6 py-3 my-2 flex items-center rounded-full hover:bg-[#E4F8E6] hover:border-[#E4F8E6] hover:text-[#4CAF50]'>
            See Final Product
          </button>
        </a>

        <a href="https://github.com/simd22/spot" target="_blank" rel="noopener noreferrer">
        <button className='bg-pink-600 text-[#F3E5FA] group border-2 px-9 py-3 my-2 flex items-center rounded-full hover:bg-[#0019C1] hover:border-[#0019C1] hover:text-[#FCF9DC]'>
          <p className='pr-3'>See Code</p>
          <img src={github} alt="link to github" className='w-[20px] h-[20px]' />
        </button>
        </a>
      </div>

    </div>
  );
};

export default Spotify;
