"use client";

import { useEffect } from "react";
import { fetcher } from "./utils/api";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration,getGenres } from "./store/homeSlice";
import HeroBanner from "./components/HeroBanner";
import TopRated from "./components/TopRated";
import Recomended from "./components/Recomended";

export default function Home() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);

  useEffect(() => {
    fetchMostPopularMovies();
    fetchGenres();
  }, []);

  const fetchMostPopularMovies = () => {
    fetcher("/configuration")
      .then((response) => {
        console.log(response);

        const url = {
          backdrop : response.images.secure_base_url + 'original',
          poster : response.images.secure_base_url + 'original',
          profile : response.images.secure_base_url + 'original',
        }
        dispatch(getApiConfiguration(url));
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };

  const fetchGenres = async () => {
    let promises = [];
    let endPoints = ["tv","movie"];
    let allGenres = {};

    endPoints.forEach(url => {
      return promises.push(fetcher(`genre/${url}/list`))
    })

    const data = await Promise.all(promises);
    //console.log(data);

    data.map(({ genres }) => {
      return genres.map((item) => (allGenres[item.id] = item))
    })

    dispatch(getGenres(allGenres));
    
  }

  return (
    <main className="w-full h-auto">
      <div className="flex flex-col justify-center">
          <HeroBanner/>
          
          <div className="w-full flex items-center justify-center">
            <Recomended/>
          </div>
      </div>
      
    </main>
  );
}
