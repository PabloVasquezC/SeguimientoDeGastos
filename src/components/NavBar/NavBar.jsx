import React from 'react'
import Watch from './Watch/Watch';

export const NavBar = () => {
  return (
    <nav className='fixed top-0 h-16 border w-full z-10 flex justify-between items-center bg-white'>
        NavBar
        
        
        <Watch />
    </nav>
  )
}

export default NavBar;
