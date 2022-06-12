import React from 'react'
import {FaPlay} from 'react-icons/fa';
import {MdPlaylistAdd} from 'react-icons/md'
import {BiLike} from 'react-icons/bi'
import {AiFillDislike} from 'react-icons/ai'
import '../../index.css'
const ListItem = () => {
  return (
    <div className=' bg-black-rgba w-80 h-40  mx-1 list-item  '>
      <img src={require('../../assets/images/images.jpeg')} className='w-80  cursor-pointer list-img'></img>
      <div className='text-white  flex-row mt-4 ml-2 text-3xl hidden list-desc items-center'>
        <FaPlay className='mr-4 border-2 rounded-full border-white w-16 h-10 p-2 bg-black'/>
        <MdPlaylistAdd className='mr-4'/>
        <BiLike className='mr-4'/>
        <AiFillDislike className='mr-4'/>
      </div>
      <div className='text-gray-400 hidden list-desc uppercase mt-3 ml-2  items-center'>
        <span className='mr-4'>2 hours 13 minutes</span>
        <span className='border-2 p-[3px]  border-gray-600 mr-4'>+18</span>
        <span>1999</span>
      </div>
      <div className='text-white hidden list-desc mt-4 ml-2'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, architecto nisi. Accusantium est minus incidunt sequi! 
        Minus ducimus exercitationem veiti debitis.
      </div>
      <div className='text-gray-400 hidden list-desc mt-3 ml-2'>
        Action
      </div>
    </div>
  )
}

export default ListItem