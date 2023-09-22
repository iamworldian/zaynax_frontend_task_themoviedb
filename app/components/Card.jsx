

import React from "react";
import { useSelector } from "react-redux";
import { BsEye, BsHeartFill } from "react-icons/bs";
import Imdb from "./Imdb";
import Badge from "./Badge";

import { useRouter } from "next/navigation";

const Card = ({ cardData, posterUrl }) => {
  const { genres } = useSelector((state) => state.home);
  const genreList = cardData.genre_ids.map((id) => genres[id]);
  

  const router = useRouter();



  return (
    <div className="h-auto flex flex-col p-3 shrink-0 w-52 lg:w-52 sm:w-52 m-2 rounded-xl hover:bg-amber-200 hover:text-black justify-center items-center" onClick={() => router.push(`details/movie/${cardData.id}`)}>
      <div className="relative">
        <img
          src={cardData.poster_path ? posterUrl(cardData.poster_path) : 'https://static.displate.com/857x1200/displate/2022-04-15/7422bfe15b3ea7b5933dffd896e9c7f9_46003a1b7353dc7b5a02949bd074432a.jpg'}
          alt="poster"
          className="rounded-lg lg:w-52 sm:w-52"
        />
        
{/* Genres Badge  */}
        <div className="absolute bottom-5 flex flex-wrap shrink-0 lg:visible ">
          {genreList?.map((val, index) => {
            return <Badge key={index} value={val?.name} />;
          })}
        </div>
      </div>

      <div className="flex flex-col h-auto justify-between mt-2 h-2/3">
        <p className="">{cardData.title?.slice(0,10)}</p>
        <div className="flex flex-col">
          <p className="text-sm font-bold m-2">
            {cardData.release_date?.split("-")[0]}
          </p>
          <div className="flex justify-between mt-2">
            <div className="flex gap-x-2 p-2">
              <Imdb />
              <p>{cardData.vote_average.toPrecision(2)}</p>
            </div>
            <div className="flex gap-x-2 p-2">
              <BsEye />
              <BsHeartFill className="text-red-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
