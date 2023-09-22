'use client';

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import useFetch from "../hooks/useFetch";
import { useSelector } from "react-redux";
import TopRated from "./TopRated";


const HeroBanner = () => {

  const [backDrop, setBackDrop] = useState("");
  const [query, setQuery] = useState("");
  const router = useRouter();

  const { url } = useSelector((state) => state.home);

  const {data,loading} = useFetch('/movie/upcoming');

  useEffect(() => {
    const bgurl = url.backdrop + data?.results[Math.floor(Math.random() * 20)].backdrop_path;
    setBackDrop(bgurl);
  } , [data]);

  console.log(backDrop);
  
  const searchQueryHandler = (event) => {
      if(event.key === "Enter" && query.length > 0){
        router.push(`/search/${query}`);
      }
  }

  return (

    <div style={{'--image-url': `url(${backDrop})`}} className="lg:h-auto sm:h-auto flex flex-col bg-[image:var(--image-url)] bg-cover gap-y-10 sm:gap-y-2">
      <div 
           
          className="w-full h-full">
          <div className="flex flex-col lg:mt-48 justify-center items-center h-full ">

            <div className="lg:text-7xl text-4xl  flex flex-col gap-y-3 sm:gap-y-1 w-full justify-center items-center">
              <p>Welcome to,</p>
              <Image
                src="/images/DRAMATIC.png"
                alt="dramatic logo"
                width={300}
                height={600}
              />
              <p className="lg:text-xl text-sm">
                Movies move us like nothing else can
              </p>

              <div  className="w-full m-2">
                <div className="flex w-full justify-center items-center">
                  <input type="text" name="" id="" 
                  placeholder="Search for a movie ot tv shows .." className="sm:text-sm text-sm w-1/2 h-10 rounded-l-3xl p-5 text-black"
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={searchQueryHandler}
                  />
                  <button onClick={searchQueryHandler} className="bg-amber-500 h-10 w-24 rounded-r-3xl text-xl">Search</button>

                 
                </div>
                
              </div>
              
            </div>
            
      </div>
      
    </div>
    <TopRated className="mt-10"/>
    </div>
 
  );
};

export default HeroBanner;
