import React from 'react'
import Watch from './Watch/Watch';

export const NavBar = () => {
  return (
    <nav className='fixed top-0 h-16 shadow-xl border w-full z-10 flex justify-between items-center bg-white'>
        <Watch />
    </nav>
  )
}

export default NavBar;
