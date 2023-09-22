import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { useSelector } from "react-redux";
import FilterButton from "./FilterButton";
import Card from "./Card";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

const languageData = [
  {
    code: "hi",
    title: "Hindi",
    added: true,
  },
  {
    code: "bn",
    title: "Bengali",
    added: true,
  },
  {
    code: "mr",
    title: "Marathi",
    added: true,
  },
  {
    code: "ml",
    title: "Malayalam",
    added: true,
  },
  {
    code: "as",
    title: "Assamese",
    added: true,
  },
  {
    code: "te",
    title: "Telugu",
    added: true,
  },
  {
    code: "ta",
    title: "Tamil",
    added: true,
  },
];

const Recomended = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const { url } = useSelector((state) => state.home);
  console.log(url);
  const [languageFilter, setLanguageFilter] = useState([...languageData]);
  const { data, loading } = useFetch(
    `/discover/movie?with_origin_country=IN&page=${page}`
  );

  useEffect(() => {
    setMovies(data?.results);
  }, [data]);

  function updateButtonState(code) {
    const updateFilter = [...languageFilter];
    updateFilter.map((filter) => {
      if (filter.code === code) {
        filter.added = !filter.added;
      } else filter;
    });

    setLanguageFilter(updateFilter);
    filterMovies();
  }

  function filterMovies() {
    let updateMovies = [...data?.results];

    updateMovies = updateMovies.filter(
      (movie) =>
        languageFilter.find((lang) => lang.code === movie.original_language)
          ?.added === true
    );

    setMovies(updateMovies);
  }

  function nextPage() {
    setPage(page + 1);
  }

  function prevPage() {
    if (page > 1) setPage(page - 1);
  }

  const posterUrl = (path) => {
    
    return url.poster + path;
  };

  return (
    <div className="flex flex-col w-5/6 justify-center items-start">
      <p className="m-2">Recommended For You</p>

      {/* language filter butttons */}

      <div className="w-full flex flex-wrap justify-center">
        {languageFilter.map((b, index) => {
          return (
            <FilterButton
              filter={b}
              updateButtonState={updateButtonState}
              key={index}
            />
          );
        })}
      </div>

      <div className="w-full flex gap-x-4 justify-center m-2">
        
        <BsFillArrowLeftCircleFill
          className="text-4xl z-10 text-amber-500 top-1/3 hover:text-slate-400"
          onClick={prevPage}
        />
        <BsFillArrowRightCircleFill
          className="text-4xl z-10 text-amber-500 right-10 top-1/3  hover:text-slate-400"
          onClick={nextPage}
        />
      </div>

      <div className="w-full flex gap-x-4 justify-center m-2">
        <p className="w-full text-center">
          Page : {page} out of {data?.total_pages}
        </p>
      </div>

      <div className="w-full grid lg:grid-cols-6 sm:grid-cols-2 sm:gap-0 gap-1">
        {movies?.map((m,index) => (
          <Card key={index} cardData={m} posterUrl={posterUrl} />
        ))}
      </div>

      <div className="w-full flex gap-x-4 justify-center m-2">
        <BsFillArrowLeftCircleFill
          className="text-4xl z-10 text-amber-500 top-1/3 hover:text-slate-400"
          onClick={prevPage}
        />
        <BsFillArrowRightCircleFill
          className="text-4xl z-10 text-amber-500 right-10 top-1/3  hover:text-slate-400"
          onClick={nextPage}
        />
      </div>

      <div className="w-full flex gap-x-4 justify-center m-2">
        <p className="w-full text-center">
          Page : {page} out of {data?.total_pages}
        </p>
      </div>
    </div>
  );
};

export default Recomended;
