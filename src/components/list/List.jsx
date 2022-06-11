import React from 'react'
import {BsChevronRight} from 'react-icons/bs'
import {AiOutlineLeft} from 'react-icons/ai'
import ListItem from '../list_item/ListItem'

const List = () => {
  return (
    <div className='flex flex-col pt-20 mx-20'>
        <span className='text-white text-2xl'>Continue to Watch</span>
        <AiOutlineLeft className='text-white absolute text-6xl left-4 h-10 -bottom-48'/>
        <div className='grid grid-flow-row grid-cols-7 mt-8'>
           <ListItem/>
           <ListItem/>
           <ListItem/>
           <ListItem/>
           <ListItem/>
           <ListItem/>
           <ListItem/>
        </div>
        <BsChevronRight className='text-white absolute text-6xl right-8 h-9 -bottom-48'/>
    </div>
  )
}

export default List