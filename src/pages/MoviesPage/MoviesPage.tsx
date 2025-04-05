import { useQuery } from "@tanstack/react-query";
import { useCallback, useState } from "react";
import type { Movie } from "../home/Home";
import CustomButton from "../../components/button/CustomButton";
import MovieSearchCard from "../../components/MovieSearchCard/MovieSearchCard";
import { useWatchListFunctions } from "../../utils/services/watchListFns";
import userStore from "../../zustand/UserStore/UserStore";

type MoviesRes = {
  message: string;
  movies: Movie[];
};

function MoviesPage() {
  const [page, setPage] = useState<number>(1);
  const [movies, setMovies] = useState<Movie[]>([]);
  const { data, isLoading } = useQuery<MoviesRes>({
    queryKey: [`${page}-movies`],
    queryFn: () => {
      return fetch(`http://localhost:8001/movies/?page=${page}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((response) => {
          setMovies((prev) => [...prev, ...response.movies]);
          console.log(movies);
          console.log(response);
          return response;
        });
    },
  });

  const { watchList } = userStore();
  const { addMovieToWatchList, removeMovieFromWatchList } =
    useWatchListFunctions();

  const addCurrentMovieToWatchList = useCallback(
    (movieId: string) => {
      addMovieToWatchList(movieId);
    },
    [data?.movies]
  );

  const removeCurrentMovieFromWatchList = useCallback(
    (movieId: string) => {
      removeMovieFromWatchList(movieId);
    },
    [data?.movies]
  );

  if (isLoading && movies.length === 0) return <div>loading...</div>;

  return (
    <>
      <div className="movies flex flex-wrap gap-10 ">
        {movies.length > 0 &&
          movies.map((movie) => {
            return (
              <MovieSearchCard
                addToWatchList={addCurrentMovieToWatchList}
                className="aspect-[2/1] max-h-[200px] relative text-black rounded-lg"
                genre={movie.genres}
                id={movie._id}
                image={movie.backdrop_path}
                isInWatchList={watchList.includes(movie._id) ? true : false}
                removeFromWatchList={removeCurrentMovieFromWatchList}
                title={movie.title}
                year={movie.release_date}
                key={movie._id}
              />
            );
          })}
      </div>
      <div className="mt-10">
        <CustomButton onClick={() => setPage(page + 1)}>load more</CustomButton>
      </div>
    </>
  );
}

export default MoviesPage;
