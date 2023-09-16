"use client";

import { useEffect } from "react";
import { fetcher } from "./utils/api";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration } from "./store/homeSlice";
import HeroBanner from "./components/HeroBanner";

export default function Home() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);

  useEffect(() => {
    fetchMostPopularMovies();
  });

  const fetchMostPopularMovies = () => {
    fetcher("movie/popular")
      .then((response) => {
        console.log(response);
        dispatch(getApiConfiguration(response));
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HeroBanner/>
    </main>
  );
}
