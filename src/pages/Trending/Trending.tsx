import { useCallback, useState } from "react";
import FavouriteMovieComponents from "../../components/FavouriteMovieComponents/FavouriteMovieComponents";
import type { Movie } from "../home/Home";
import { useQuery } from "@tanstack/react-query";
import userStore from "../../zustand/UserStore/UserStore";
import { useWatchListFunctions } from "../../utils/services/watchListFns";

function Trending() {
  const [trending, setTrending] = useState<Movie[] | null>(null);
  const { watchList } = userStore();
  const { addMovieToWatchList, removeMovieFromWatchList } =
    useWatchListFunctions();

  const { isLoading } = useQuery({
    queryKey: ["trending"],
    queryFn: () =>
      fetch("http://localhost:8001/top-movies")
        .then((res) => res.json())
        .then((response) => {
          setTrending(response.topMovies);
          return response;
        }),
  });

  const addCurrentMovieToWatchList = useCallback(
    (movieId: string) => {
      addMovieToWatchList(movieId);
    },
    [trending]
  );

  const removeCurrentMovieFromWatchList = useCallback(
    (movieId: string) => {
      removeMovieFromWatchList(movieId);
    },
    [trending]
  );

  if (isLoading) return <div>loading.....</div>;

  return (
    <div className="mt-[60px] text-white ml-5">
      <h1 className="font-Poppins text-3xl mb-5 font-semibold">Trending</h1>
      <div className="flex gap-5 flex-wrap my-10">
        {trending?.map((movie: Movie) => {
          return (
            <FavouriteMovieComponents
              movieId={movie._id}
              addToWatchList={addCurrentMovieToWatchList}
              removeFromWatchList={removeCurrentMovieFromWatchList}
              isInWatchList={
                watchList.includes(movie._id.toString()) ? true : false
              }
              genre={movie.genres}
              title={movie.title}
              year={movie.release_date}
              image={movie.backdrop_path}
              id={Number(movie._id)}
              className="w-[348px] h-[259px] relative text-black rounded-lg"
            />
          );
        })}
      </div>
    </div>
  );
}

export default Trending;
