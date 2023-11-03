'use client'
import { useState } from 'react'


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen); // Toggle the state
      };
    

  return (

<nav className="bg-[#1A1A1A] ">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto  pl-4 pb-4">
    <a href="#" className="flex items-center">
        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
    </a>
    <button onClick={toggleMenu} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded={isOpen}>
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className={`${
            isOpen ? 'block' : 'hidden'
          } w-full md:block  md:w-auto mt-4  bg-black   md:flex-row  md:mt-0 md:border-0  `}
          id="navbar-default">
      <ul className="font-medium flex flex-col  border-gray-100   md:flex-row  md:mt-0 md:border-0  ">
        <li className=' border-black border-2 '>
          <a href="#" className="block  hover:text-white   md:bg-primary-white hover:bg-black  md:p-2 " aria-current="page">Home</a>
        </li>
        <li className='border-black border-2'>
          <a href="#" className="block py-4 pl-3 pr-8  md:bg-primary-white hover:bg-black  md:p-2 hover:text-white  ">Team</a>
        </li>
        <li className='border-black border-2'>
          <a href="#" className="block py-4 pl-3 pr-8  md:bg-primary-white hover:bg-black  md:p-2 hover:text-white  ">Project</a>
        </li>
        <li className='border-black border-2'>
          <a href="#" className="block py-4 pl-3 pr-6  md:bg-primary-white hover:bg-black  md:p-2 hover:text-white  ">Contacts</a>
        </li>
        <li className='border-black border-2'>
          <a href="#" className="block py-4 pl-3 pr-6  md:bg-primary-white hover:bg-black  md:p-2 hover:text-white  ">Events</a>
        </li>
        <li className='border-black border-2'>
          <a href="#" className="block py-4 pl-3   md:bg-primary-white hover:bg-black  md:p-2 hover:text-white  ">Blogs</a>
        </li>
      </ul>
    </div>
  </div>
</nav>


  )
}

export default Navbar
