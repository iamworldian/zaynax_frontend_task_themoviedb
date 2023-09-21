"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import useFetch from "../hooks/useFetch";
import { useSelector } from "react-redux";
import TopRated from "./TopRated";
import Badge from "./Badge";
import { BsFillPlayFill } from "react-icons/bs";
import Imdb from "./Imdb";

const DetailBanner = ({ logo_path, movieDetails }) => {
  console.log(logo_path, movieDetails);
  const [backDrop, setBackDrop] = useState("");
  const [logo, setLogo] = useState("");
  const [query, setQuery] = useState("");
  const router = useRouter();

  const { url } = useSelector((state) => state.home);
  const { genres } = useSelector((state) => state.home);
  const genreList = movieDetails?.genres?.map((genre) => genres[genre.id].name);
  console.log("genrelist", genreList);
  useEffect(() => {
    const bgurl = url.backdrop + movieDetails?.backdrop_path;
    const logoPath = url.backdrop + logo_path;
    setBackDrop(bgurl);
    setLogo(logoPath);
  });

  const searchQueryHandler = (event: any) => {
    if (event.key === "Enter" && query.length > 0) {
      router.push(`/search/${query}`);
    }
  };

  return (
    <div
      style={{ "--image-url": `url(${backDrop})` }}
      className="h-full lg:h-auto sm:h-auto flex flex-col bg-[image:var(--image-url)] md:bg-cover sm:bg-cover gap-y-10 sm:gap-y-2 "
    >
      <div className="w-full h-2/3 flex flex-col  bg-gradient-to-r from-slate-900/90 to-amber-600/20 ">
        <div className="flex flex-col mt-24 m-5 gap-y-5 md:ml-20 sm:ml-5 sm:justify-center sm:items-center md:justify-start md:items-start">
          <img src={logo} alt="" className="w-52 m-5" />
          <p className="w-1/3 text-xs">{movieDetails?.overview}</p>
          <p className="text-red-500 font-bold text-sm uppercase">Genres</p>

          <div className="flex">
            {genreList?.map((genre, index) => (
              <Badge key={index} value={genre} />
            ))}
          </div>

          <div className="flex">
            <button className="bg-purple-700 text-md p-4 rounded-3xl flex items-center uppercase ml">
              Watch{" "}
              <span className="text-xl ml-3">
                {" "}
                <BsFillPlayFill />
              </span>
            </button>
          </div>

          <div className="flex gap-x-5">
            <Imdb />
            <p>{movieDetails?.vote_average.toPrecision(2)}</p>
            <p>{movieDetails?.release_date.split("-")[0]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailBanner;
