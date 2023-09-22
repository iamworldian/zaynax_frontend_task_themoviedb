"use client";

import useFetch from "@/app/hooks/useFetch";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import DetailBanner from "@/app/components/DetailBanner";
import { useSelector } from "react-redux";
import VideoPopup from "@/app/components/VideoPopUp/VideoPopUp";
import VideosSection from "@/app/components/VideoSection/VideoSection";
const MovieDetails = () => {
  const { id } = useParams();

  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);

  // fetch movie data by id
  const movieData = useFetch(`/movie/${id}`);
  const imageData = useFetch(`/movie/${id}/images`);
  const creditsData = useFetch(`/movie/${id}/credits`);
  const {data, loading} = useFetch(`/movie/${id}/videos`);

  

  const { url } = useSelector((state) => state.home);

 

  return (
    <div className="w-full h-full">
      <DetailBanner
        movieDetails={movieData.data}
        logo_path={imageData.data?.logos[0]?.file_path}
      />

      <div className="w-5/6 h-full md:flex sm:flex-col md:flex-row mx-auto gap-x-5 justify-start items-start">


      <div className="w-full flex flex-col">
          <p className="m-5">Cast and Crew</p>
          <div className="grid lg:grid-cols-6 sm:grid-cols-2 gap-5 my-auto">
            {creditsData.data?.cast.map((actor, index) => (
              <div key={index} className="flex flex-col">
                <img
                  src={
                    actor.profile_path
                      ? `http://image.tmdb.org/t/p/original${actor.profile_path}`
                      : `https://static.displate.com/857x1200/displate/2022-04-15/7422bfe15b3ea7b5933dffd896e9c7f9_46003a1b7353dc7b5a02949bd074432a.jpg`
                  }
                  alt=""
                  className="md:w-24 sm:w-96 rounded-2xl"
                />
                <p className="text-sm text-wrap w-24">{actor.name}</p>
                <p className="text-xs text-wrap w-24 text-purple-200"><span className="text-amber-600">AS </span>{actor.character}</p>
              </div>
            ))}
          </div>
        </div>



        <div className="md:w-2/6 sm:w-full flex flex-col items-start justify-start">
          <p className="m-5"> Trailer </p>
           <VideosSection data={data} loading={loading}/>
        </div>

       
      </div>
    </div>
  );
};

export default MovieDetails;
