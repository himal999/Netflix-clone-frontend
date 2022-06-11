import React, { useState } from 'react'
import {HiOutlineSearch} from 'react-icons/hi'
import {MdOutlineNotifications} from 'react-icons/md'
import {AiOutlineCaretDown} from 'react-icons/ai'

const Navbar = () => {
  const [isScrolled,setIsScrolled] = useState(false);
  window.onscroll = ()=>{
    setIsScrolled(window.pageYOffset <= 472 ? true:false);
    console.log(window.pageYOffset)
    return () => window.onscroll = null;
    
  }
  return (
    <div className={`z-[999] px-14  flex flex-row justify-between fixed w-full ${isScrolled ? 'navbar':'navbar-scrolled'}`}>
    <div className='flex flex-row  w-3/6 items-center justify-center'>
       <img src={require("../../assets/images/netflix-logo.png")} className='w-40 h-[90px] mr-10'></img>
       <ul className='flex flex-row text-white text-xl  '>
           <li className='px-4'><a href=''>Home</a></li>
           <li className='px-4'><a href=''>Series</a></li>
           <li className='px-4' ><a href=''>Movies</a></li>
           <li className='px-4'><a href=''>New and Popular</a></li>
           <li className='px-4'><a href=''>My List</a></li>
       </ul>
    </div>
    <div className='flex flex-row w-3/6 text-white justify-end items-center text-xl'>
       <HiOutlineSearch className='mx-3'/>
       <span  className='mx-3'>KID</span>
       <MdOutlineNotifications  className='mx-3'/>
       <div className='mx-3 bg-stone-600 rounded-full  w-12 h-12  flex justify-center items-center'>Pic</div>
       <AiOutlineCaretDown  className='mx-3'/>
    </div>
</div>
  )
}

export default Navbar