import React from 'react'
import Watch from './Watch/Watch';

export const NavBar = () => {
  return (
    <nav className='fixed mt-0 h-12 border w-full z-10 flex justify-between  bg-white'>
        navbar
        
        {/* Reloj Dinamico */}
        <Watch />
    </nav>
  )
}

export default NavBar;
