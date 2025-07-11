import React from 'react';
import spotify from '../assets/spotify.png';
import github from '../assets/github.png'

const Spotify = () => {
  return (
    <div name="spotify" className='w-full h-screen pt-[60px] pb-[60px] bg-white flex flex-col items-center overflow-auto'>

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
          In this project, I used several tools such as React and Node.js to explore the "behind the scenes" of one of my favorite apps, Spotify.
          The project incorporated the Spotify API in several areas including user authentication and requesting user playlist and account information.
        </p>
        </div>
        
        <div className="py-4">
          <p className='font-bold text-lg sm:text-2xl'>Goal</p>
          <p className='text-s sm:text-lg'>
            The goal of this project was twofold: to dive into how a React app is structured and understand how to implement communication with APIs. 
            I focused on using React hooks and the React Context API for sharing state information across components without relying on props.
          </p>
        </div>
        
        <div className="py-4">
          <p className='font-bold text-lg sm:text-2xl'>Reflection</p>
          <p className='text-s sm:text-lg'>
            After completing the project, I have a strong grasp of React and further honed my HTML, CSS, and JavaScript skills.
            Completing this project clarified how GET requests to and responses from APIs function in the context of a real-world application.
            Furthermore, this project demystified the behind the scenes of websites and apps resulting in a much greater appreciation for apps like Spotify throughout my life.
          </p>
        </div>
    
      </div>
      
      <div className='flex flex-col'>
        <a href="https://spotify-clone-922c2.web.app/" target="_blank" rel="noopener noreferrer">
          <button className='bg-[#F3AD55] border-[#F3AD55] text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-white hover:border-[#F3AD55] hover:text-[#F3AD55]'>
            See Final Product
          </button>
        </a>

        <a href="https://github.com/simd22/spot" target="_blank" rel="noopener noreferrer">
        <button className="bg-[#F3AD55] border-[#F3AD55] text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-white hover:border-[#F3AD55] hover:text-[#F3AD55]">
          <p className='pr-3'>See Code</p>
          <img src={github} alt="link to github" className='w-[20px] h-[20px]' />
        </button>
        </a>
      </div>

    </div>
  );
};

export default Spotify;
