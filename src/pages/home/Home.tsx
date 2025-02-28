import { RootState } from "../../redux/store/rootStore";
import { useAppSelector } from "../../utils/hooks/hooks";
import { useState } from "react";
import CustomButton from "../../components/button/CustomButton";
import { HugIcon } from "../../assets/images/icons";
import MovieCard from "../../components/MovieCard/MovieCard";
import { Link, useNavigate } from "react-router-dom";

export type Movie = {
  backdrop_path: string
  genres: string[]
  overview: string
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
  vote_count: number;
  _id: number;
};

function Home() {
  const { user, trending } = useAppSelector((state: RootState) => ({
    user: state.userRed.user,
    trending: state.trendingRed.trending
  }));
  const [index, setIndex] = useState<number>(1);
  const movies = trending.slice(0, 4)
  const currentMovie = movies[index]
  const navigate = useNavigate()

  if (currentMovie === undefined) return <h1>loading...</h1>

  return (
    <div>
      <div
        className="h-[455px] relative w-full flex overflow-x-scroll snap-x snap-mandatory scrollbar-hide "
      >
        <div
          className="h-[455px] w-full bg-gradient-to-r from-purple-800/80 to-black/80"
          style={{
            backgroundImage: `linear-gradient(to right bottom, rgba(97,0,194,0.5), rgba(25,24,23,0.5)), url(https://image.tmdb.org/t/p/original/${currentMovie.backdrop_path})`,
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
            backgroundRepeat: 'no-repeat',
          }}
        ></div>

        <div className="absolute bottom-16 left-20 space-y-5">
          <h1 className="text-white text-4xl font-bold">{currentMovie.title}</h1>
          <p className="text-white text-sm">
            {currentMovie.release_date} | {currentMovie.genres.join(", ")}
          </p>
          <div className="flex items-center gap-4">
            <CustomButton onClick={() => { }}>Watch Now</CustomButton>
            <HugIcon
              className="size-10 cursor-pointer active:scale-95 hover:scale-105 transition-all"
              handleClick={() =>
                console.log('hello')
              }
              shouldFill={user?.watchList.includes(currentMovie._id.toString()) ?? false}
            />
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-col">
        <h1 className="text-4xl font-bold ml-4 text-white font-Poppins">Trending</h1>
        <div className="flex mt-5 gap-5">
          {movies.map((movie, key) => (
            <MovieCard
              key={movie._id}
              isInWatchList={user?.watchList.includes(movie._id.toString()) ?? false}
              genre={movie.genres}
              title={movie.title}
              year={movie.release_date}
              image={movie.backdrop_path}
              id={movie._id}
              movieKey={key}
              isActive={index === key}
              className="w-[17.8vw] ml-4 overflow-hidden h-fit flex-shrink-0 border-white border-2 rounded-lg shadow-lg font-Poppins text-black relative select-none hover:scale-105 hover:opacity-100 cursor-pointer transition-all duration-300"
              addToWatchList={() => console.log('hello')}
              removeFromWatchList={() => console.log('world')}
              setIndex={setIndex}
              onClick={() => navigate(`/movie/${movie._id}`)}
            />
          ))}
        </div>
        <div className="mt-5 self-center">
          <CustomButton><Link to='/trending'>Check all the trending</Link></CustomButton>
        </div>
      </div>


    </div>
  );
}

export default Home;