import {AiOutlineInstagram} from 'react-icons/ai'
import {RiTwitterXLine} from 'react-icons/ri'
import {FiYoutube} from 'react-icons/fi'
import {PiDiscordLogo} from 'react-icons/pi'
import {FiLinkedin,FiGithub} from 'react-icons/fi'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='flex flex-row border-t border-white bg-[#1A1A1A] text-sm text-white gap-20 w-full'>
        <div className='pt-6'>
            <p className=''>©️ Copyright 2021 - IEEE CS VITC. All Rights Reserved.</p>
        </div>
        <div className='pt-6 hidden md:visible'>
            <h1 className=' border-b '>Menu</h1>
            <div className='flex flex-col pt-4'>
                <Link href="/" >Home</Link>
                <Link href="/" >The Team</Link>
                <Link href="/" >Events</Link>
                <Link href="/" >Projects</Link>
                <Link href="/" >Blogs</Link>
                <Link href="/" >Contact</Link>
            </div>
        </div>
        <div className='flex flex-col pt-6'>
            <h1 className='border-b'>Address</h1>
            <p className='pt-4'>Kelambakkam - Vandalur Rd, Rajan Nagar,</p>
            <p className='pb-4'>Chennai, Tamil Nadu 600127</p>

            <h1 >Email</h1>
            <p>ieeecomputersociety@vit.ac.in</p>

        </div>
        <div className='pt-6 '>
            <h1 className='border-b '>Social Media</h1>
            <div className='grid grid-cols-3 gap-5 pb-4 pt-4'>
            <a href='https://github.com'><AiOutlineInstagram/></a>
            <a href='https://github.com'><RiTwitterXLine/></a>
            <a href='https://github.com'><FiYoutube/></a>
            <a href='https://github.com'><PiDiscordLogo/></a>
            <a href='https://github.com'><FiLinkedin/></a>
            <a href='https://github.com'><FiGithub/></a>
            </div>
            
        </div>
      
    </div>
  )
}

export default Footer
