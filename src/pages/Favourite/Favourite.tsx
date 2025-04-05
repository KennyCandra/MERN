import FavouriteMovieComponents from "../../components/FavouriteMovieComponents/FavouriteMovieComponents";
import { useCallback, useState } from "react";
import { useFetchWithRefToken } from "../../utils/hooks/fetchWithRefreshToken";
import { useQuery } from "@tanstack/react-query";
import userStore from "../../zustand/UserStore/UserStore";
import { useWatchListFunctions } from "../../utils/services/watchListFns";

interface WatchListMovie {
  backdrop_path: string;
  genres: string[];
  overview: string;
  poster_path: string;
  release_date: Date;
  title: string;
  vote_average: number;
  vote_count: number;
  _id: string;
}

function Favourite() {
  const { accessToken } = userStore();
  const { fetchWithRefToken } = useFetchWithRefToken(accessToken);
  const [movies, setMoives] = useState<WatchListMovie[]>([]);
  const { addMovieToWatchList, removeMovieFromWatchList } =
    useWatchListFunctions();
  const { isLoading } = useQuery({
    queryKey: ["WatchList"],
    queryFn: () =>
      fetchWithRefToken(`user/watchlist/67b8ce505128ab7bb36086fd`).then(
        (res) => {
          setMoives(res.watchList);
          return res;
        }
      ),
  });
  const { watchList } = userStore();

  const addCurrentMovieToWatchList = useCallback(
    (movieId: string) => {
      addMovieToWatchList(movieId);
    },
    [movies]
  );

  const removeCurrentMovieFromWatchList = useCallback(
    (movieId: string) => {
      removeMovieFromWatchList(movieId);
    },
    [movies]
  );

  if (isLoading) return <div>loading....</div>;

  return (
    <div className="mt-[60px] text-white ml-5">
      <h1 className="font-Poppins text-3xl mb-5 font-semibold">Favourites</h1>
      <div className="flex gap-5 flex-wrap">
        {movies.map((movie) => {
          return (
            <FavouriteMovieComponents
              addToWatchList={addCurrentMovieToWatchList}
              movieId={movie._id}
              removeFromWatchList={removeCurrentMovieFromWatchList}
              key={movie._id}
              isInWatchList={watchList.includes(movie._id.toString()) ?? false}
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

export default Favourite;
