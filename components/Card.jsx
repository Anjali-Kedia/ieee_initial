import React from 'react'
import {FiUser} from 'react-icons/fi'
import {BiSolidCircle} from 'react-icons/bi'

const Card = () => {
  return (
    <div >
    <div className="bg-black h-10 lg:w-[650px] md:w-[500px] w-[400px] flex  justify-between  p-3 ">
        <div className='flex gap-1'>
        <BiSolidCircle className='text-green-500'/>
        <BiSolidCircle className='text-red-500'/>
        <BiSolidCircle className='text-yellow-500'/>
    </div>
    <div>
        <FiUser className='text-white '/>
      </div>
    </div>
      <div className="bg-white lg:w-[650px] md:w-[500px] w-[400px] h-96 shadow-md p-9 ">
        <h1 className='pb-9 text-3xl'>Lorem Ipsum</h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </div>
    </div>
  )
}

export default Card
