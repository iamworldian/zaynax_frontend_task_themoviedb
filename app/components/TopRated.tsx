import React, { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch'
import { useSelector } from 'react-redux';
import Card from './Card';
import { BsFillArrowLeftCircleFill,BsFillArrowRightCircleFill } from 'react-icons/bs';




const TopRated = () => {

  const [movies, setMovies] = useState(null);
  
  const { url } = useSelector((state) => state.home);
  let posterPath = url.poster;
  const { data, loading } = useFetch('movie/popular');
  let temp = data?.results;
  

  useEffect(() => {   
    setMovies(temp);
  } , [data]);
  


  const posterUrl = ( path ) => {
    return posterPath + path;
  }


  function rightArrowClick() {
    
    
    let left = movies[0];
    console.log(left);
    setMovies([...movies.slice(1) , left]);
  }

  function leftArrowClick() {
    
    
    let right = movies[movies.length - 1];
    
    setMovies([right,...movies.slice(0,movies.length - 1)]);
  }

  return (
    <div className='w-auto flex flex-col backdrop-blur-md justify-center lg:ml-20 bg-black/40 p-4 lg:px-20 rounded-lg overflow-hidden transition-all delay-100 duration-100 ease-in'>
        <div className='flex w-auto justify-between items-center '>
            <p className='font-bold text-white'> MOVIES YOU MUST WATCH </p>
            <select name="" id="" className='rounded-lg bg-amber-500 text-black border-0'>
               Filter
                <option value="">Dummy</option>
                <option value="">Dummy</option>
                <option value="">Dummy</option>
                <option value="">Dummy</option>
            </select>
        </div>

        
        <div className='h-3/4 flex w-auto'>
        
              <BsFillArrowLeftCircleFill className="absolute text-5xl z-10 text-amber-500 top-1/3 hover:text-slate-400"
              onClick={leftArrowClick}
              />
            
             
                {
                  movies?.map((m) => {
                    return <Card cardData={m} posterUrl={posterUrl}/>
                  })
                }

              <BsFillArrowRightCircleFill className="absolute text-5xl z-10 text-amber-500 right-10 top-1/3  hover:text-slate-400"
              onClick={rightArrowClick}
              />
        
        </div>
    </div>
  )
}

export default TopRated