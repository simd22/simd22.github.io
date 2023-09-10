import React, {useState} from 'react'
import {FaBars, FaTimes} from "react-icons/fa"

// FaGithub, FaLinkedin
// import { HiOutlineMail } from 'react-icons/hi'
// import Logo from "../assets/logo.png"

import {Link as ScrollLink} from 'react-scroll'
import { Link as RouterLink } from 'react-router-dom';
const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

  return (
    <div className='font-bold fixed w-full h-[60px] z-999 top-0 flex justify-between items-center px-4 bg-[#DF9ECD] text-[#E4F8E6]'>
        <RouterLink to="/">
            
                <div className='border px-1 rounded'>
                    SD
                </div>
            
        </RouterLink>

        {/* MENU */}
        <ul className='hidden md:flex'>
            <li>
                <RouterLink to="/">Home</RouterLink>
            </li>
            <li>
                <RouterLink to="/about">About</RouterLink>
            </li>
        </ul>

        {/* HAMBURGER */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars/> : <FaTimes />}
        </div>

        {/* MOBILE MENU */}

        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#001193]'}>
            <li className='py-6 text-4xl'>
                <RouterLink to="/" onClick={handleClick}>Home</RouterLink>
            </li>
            <li className='py-6 text-4xl'>
                <RouterLink to="/about" onClick={handleClick}>About</RouterLink>
            </li>
        </ul>
        
        {/* SOCIAL ICONS */}
        <div className='hidden'></div>

        {/* Social icons
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
            <li className='w-[160px] h=[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                <a className='flex justify-between items-center w-full text-gray-300'
                href="Linkedin">
                    LinkedIn <FaLinkedin size={30}/>
                </a>
            </li>

            <li className='w-[160px] h=[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                <a className='flex justify-between items-center w-full text-gray-300'
                href="Github">
                    Github <FaGithub size={30}/>
                </a>
            </li>

            <li className='w-[160px] h=[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                <a className='flex justify-between items-center w-full text-gray-300'
                href="Email">
                    Email <HiOutlineMail size={30}/>
                </a>
            </li>
        </ul>
      </div> */}
    </div>
  )
}

export default Navbar