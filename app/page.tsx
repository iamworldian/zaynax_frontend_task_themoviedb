"use client";

import Image from "next/image";
import { useEffect } from "react";
import { fetcher } from "./utils.ts/api";
import { AxiosResponse } from "axios";

export default function Home() {
  useEffect(() => {
    fetchMostPopularMovies();
  });

  const fetchMostPopularMovies = () => {
    fetcher("movie/popular")
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <pre>{process.env.TMDB_TOKEN}</pre>
      </div>
    </main>
  );
}
