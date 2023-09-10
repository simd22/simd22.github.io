import React, {useState} from 'react'
import {FaBars, FaTimes} from "react-icons/fa"
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

  return (
    <div className='font-bold fixed w-full h-[60px] z-1000 top-0 flex justify-between items-center px-4 bg-[#DF9ECD] text-[#E4F8E6]'>
        <RouterLink to="/">
                <div className='text-2xl border px-1 rounded'>
                    SD
                </div>
        </RouterLink>

        {/* MENU */}
        <ul className='text-2xl hidden md:flex'>
            <li>
                <RouterLink to="/" className='hover:underline'>Home</RouterLink>
            </li>
            <li>
                <RouterLink to="/about" className='hover:underline'>About</RouterLink>
            </li>
        </ul>

        {/* HAMBURGER */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars/> : <FaTimes />}
        </div>

        {/* MOBILE MENU */}

        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#DF9ECD]'}>
            <li className='py-6 text-4xl'>
                <RouterLink to="/" onClick={handleClick}>Home</RouterLink>
            </li>
            <li className='py-6 text-4xl'>
                <RouterLink to="/about" onClick={handleClick}>About</RouterLink>
            </li>
        </ul>
    </div>
  )
}

export default Navbar