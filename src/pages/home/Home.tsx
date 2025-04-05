import { useCallback, useState } from "react";
import CustomButton from "../../components/button/CustomButton";
import { HugIcon } from "../../assets/images/icons";
import MovieCard from "../../components/MovieCard/MovieCard";
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import userStore from "../../zustand/UserStore/UserStore";
import { useWatchListFunctions } from "../../utils/services/watchListFns";

export type Movie = {
  backdrop_path: string;
  genres: string[];
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
  vote_count: number;
  _id: string;
};

function Home() {
  const [index, setIndex] = useState<number>(0);
  const navigate = useNavigate();
  const [movies, setMovies] = useState<Movie[] | null>(null);
  const { watchList, accessToken } = userStore();
  const { addMovieToWatchList, removeMovieFromWatchList } =
    useWatchListFunctions();

  const { isLoading } = useQuery({
    queryKey: ["trending"],
    queryFn: () =>
      fetch("http://localhost:8001/top-movies")
        .then((res) => res.json())
        .then((response) => {
          const slicedMovies = response.topMovies.slice(0, 4);
          setMovies(slicedMovies);
          return response;
        }),
  });

  const currentMovie = (movies && movies[index]) || null;

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

  if (isLoading) return <div>loading.....</div>;

  return (
    <div>
      {currentMovie && (
        <div className="h-[455px] relative w-full flex overflow-x-scroll snap-x snap-mandatory scrollbar-hide ">
          <div
            className="h-[455px] w-full  to-black/80"
            style={{
              backgroundImage: `linear-gradient(to right bottom, rgba(97,0,194,0.5), rgba(25,24,23,0.5)), url(https://image.tmdb.org/t/p/original/${currentMovie.backdrop_path})`,
              backgroundSize: "100% 100%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>

          <div className="absolute bottom-16 left-20 space-y-5">
            <h1 className="text-white text-4xl font-bold">
              {currentMovie.title}
            </h1>
            <p className="text-white text-sm">
              {currentMovie.release_date} | {currentMovie.genres.join(", ")}
            </p>
            <div className="flex items-center gap-4">
              <CustomButton onClick={() => {}}>Watch Now</CustomButton>
              <HugIcon
                className="size-10 cursor-pointer active:scale-95 hover:scale-105 transition-all"
                handleClick={() =>
                  watchList.includes(currentMovie._id)
                    ? removeCurrentMovieFromWatchList(
                        currentMovie._id.toString()
                      )
                    : addCurrentMovieToWatchList(currentMovie._id.toString())
                }
                shouldFill={
                  watchList.includes(currentMovie._id.toString()) ?? false
                }
              />
            </div>
          </div>
        </div>
      )}

      <div className="mt-5 flex flex-col">
        <h1 className="text-4xl font-bold ml-4 text-white font-Poppins">
          Trending
        </h1>
        <div className="flex mt-5 gap-5">
          {movies?.map((movie, key) => (
            <MovieCard
              key={movie._id}
              isInWatchList={
                watchList.includes(movie._id.toString()) ? true : false
              }
              genre={movie.genres}
              title={movie.title}
              year={movie.release_date}
              image={movie.backdrop_path}
              id={movie._id}
              movieKey={key}
              isActive={index === key}
              className="w-[17.8vw] ml-4 overflow-hidden h-fit flex-shrink-0 border-white border-2 rounded-lg shadow-lg font-Poppins text-black relative select-none hover:scale-105 hover:opacity-100 cursor-pointer transition-all duration-300"
              addToWatchList={addCurrentMovieToWatchList}
              removeFromWatchList={removeCurrentMovieFromWatchList}
              setIndex={setIndex}
              onClick={() => navigate(`/movie/${movie._id}`)}
            />
          ))}
        </div>
        <div className="mt-5 self-center">
          <CustomButton>
            <Link to="/trending">Check all the trending</Link>
          </CustomButton>
        </div>
      </div>
    </div>
  );
}

export default Home;
