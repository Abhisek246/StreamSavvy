import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import { HiChevronRight, HiChevronLeft } from 'react-icons/hi2';

const Img_Base_Url = "https://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;

function Slider() {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();

    useEffect(()=>{
        getTrending();
    }, []);

    const getTrending = ()=>{
        GlobalApi.getTrending.then((res)=> {
          setMovieList(res.data.results);
    })};

    const scrollRight = (element)=>{
      element.scrollLeft += screenWidth;
    };

    const scrollLeft = (element)=>{
      element.scrollLeft -= screenWidth;
    }
  

  return (
    <div>
      <HiChevronLeft className='hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] 
      cursor-pointer' onClick={()=> scrollLeft(elementRef.current)}/>
      <HiChevronRight className='hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] 
      cursor-pointer right-0' onClick={()=> scrollRight(elementRef.current)}/>
      <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth' ref={elementRef}>
        {movieList.map((item, idx)=>(
          <img src={Img_Base_Url + item.backdrop_path} key={idx} className='min-w-full  
           md:h-[310px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 
           transition-all duration-100 ease-in cursor-pointer'/>
        ))}
      </div>
    </div>
  )
}

export default Slider


