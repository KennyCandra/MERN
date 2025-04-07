import { useQuery } from "@tanstack/react-query";
import { useCallback, useEffect, useState } from "react";
import type { Movie } from "../home/Home";
import CustomButton from "../../components/button/CustomButton";
import MovieSearchCard from "../../components/MovieSearchCard/MovieSearchCard";
import { useWatchListFunctions } from "../../utils/services/watchListFns";
import userStore from "../../zustand/UserStore/UserStore";
import MovieSearchPageAside from "../../components/MovieSearchPageAside/MovieSearchPageAside";

type MoviesRes = {
  message: string;
  movies: Movie[];
};

export type genre = {
  id: number;
  _id: number;
  name: string;
};

type QueryRes = {
  genres: genre[];
  message: string;
};

export type GenreMap = {
  [genreName: string]: boolean;
};

function MoviesPage() {
  const { watchList } = userStore();
  const { addMovieToWatchList, removeMovieFromWatchList } = useWatchListFunctions();

  const queryParams = new URLSearchParams(location.search);
  const genreParams = queryParams.get("with_genres");
  
  const [activeGenres, setActiveGenres] = useState<GenreMap>({});
  const [page, setPage] = useState<number>(1);
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
      if (queryParams !== null) {
        setActiveGenres((prev) => ({
          ...prev,
          [+queryParams]: true,
        }));
      }
    }, [queryParams]);

  const { data, isLoading } = useQuery<MoviesRes>({
    queryKey: [`${page}-movies-${genreParams}`],
    queryFn: () =>
      fetch(
        `http://localhost:8001/movies/?page=${page}&with_genres=${genreParams}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => {
          return res.json();
        })
        .then((response) => {
          setMovies((prev) => [...prev, ...response.movies]);
          return response;
        }),
  });

  const genreQuery = useQuery<QueryRes>({
    queryKey: ["genres"],
    queryFn: () => {
      return fetch("http://localhost:8001/genre").then((res) => {
        return res.json();
      });
    },
  });

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

  const searchMoviesByGenres = async (genresIds: GenreMap) => {
    try {
      const selectedGenres = Object.entries(genresIds)
        .filter(([_, isSelected]) => isSelected)
        .map(([genre]) => genre);

      const genreParams = selectedGenres
        .map((id) => `with_genres=${id}`)
        .join("&");

      const response: Response = await fetch(
        `http://localhost:8001/movies/search?${genreParams}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data: MoviesRes = await response.json();

      setMovies(data.movies);
    } catch (err) {
      console.log(err);
    }
  };

  if ((isLoading && movies.length === 0) || genreQuery.isLoading)
    return <div>loading...</div>;

  return (
    <div className="flex text-white">
      <div className="w-[75%]">
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
          <CustomButton onClick={() => setPage(page + 1)}>
            load more
          </CustomButton>
        </div>
      </div>
      <div>
        <MovieSearchPageAside
          handleSearch={searchMoviesByGenres}
          genres={genreQuery.data?.genres!}
          setActiveGenres={setActiveGenres}
          activeGenres={activeGenres}
        />
      </div>
    </div>
  );
}

export default MoviesPage;
