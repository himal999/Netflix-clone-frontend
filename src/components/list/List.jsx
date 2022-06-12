import React, { useRef, useState } from 'react'
import {BsChevronRight} from 'react-icons/bs'
import {AiOutlineLeft} from 'react-icons/ai'
import ListItem from '../list_item/ListItem'

const List = () => {
  const [isMoved,setIsMoved] = useState(false);
  const [slideNumber,setSlideNumber] = useState(0);
  const listRef = useRef();
  const hadleClick = (dir)=>{
    setIsMoved(true);
    let dis = listRef.current.getBoundingClientRect().x - 80;

    if(dir === "left" && slideNumber>0){
      setSlideNumber(slideNumber-1)
      listRef.current.style.transform = `translateX(${327 + dis}px)`
    }

    if(dir === "right" && slideNumber < 5){
      setSlideNumber(slideNumber + 1)
      listRef.current.style.transform = `translateX(${-327 + dis}px)`
    }
}
  return (
    <div className='flex flex-col pt-20 mx-20 relative'>
        <span className='text-white text-2xl'>Continue to Watch</span>
        <AiOutlineLeft className='text-white absolute text-5xl top-40  h-32 -left-16 bg-black-rgba-1 z-10' onClick={()=>hadleClick("left")} style={{display: !isMoved && 'none'}}/>
        <div className='mt-8 flex flex-row  w-max  translate-x-[0px] transition-all ease   duration-1000 ' ref={listRef}>
           <ListItem/>
           <ListItem/>
           <ListItem/>
           <ListItem/>
           <ListItem/>
           <ListItem/>
           <ListItem/>
           <ListItem/>
           <ListItem/>
           <ListItem/>
  
           
        </div>
        <BsChevronRight className='text-white absolute text-5xl top-40  h-32  -right-11  bg-black-rgba-1 z-10' onClick={()=>hadleClick("right")}/>
    </div>
  )
}

export default List