import type { Movie } from "../home/Home";
import CustomButton from "../../components/button/CustomButton";
import { HugIcon } from "../../assets/images/icons";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useWatchListFunctions } from "../../utils/services/watchListFns";
import userStore from "../../zustand/UserStore/UserStore";

interface Response {
  movie: Movie;
  message: string;
}

function SingleMoviePage() {
  const { id } = useParams();
  const { watchList } = userStore();
  const { addMovieToWatchList, removeMovieFromWatchList } =
    useWatchListFunctions();
  const { data, isLoading } = useQuery<Response>({
    queryKey: [`${id}-movie`],
    queryFn: () => {
      return fetch(`http://localhost:8001/movies/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        return res.json();
      });
    },
  });

  if (isLoading) return <div>Loading....</div>;

  return (
    <div className="mt-5 flex text-white gap-4 items-center justify-center">
      <div className="w-[534px] h-[431px] overflow-hidden rounded-md border-white items-center flex">
        <img
          src={`https://image.tmdb.org/t/p/original/${data?.movie.backdrop_path}`}
        />
      </div>
      <div className="text-white font-Poppins w-1/2">
        <h1>{data?.movie.title}</h1>
        <div>
          <h2>{data?.movie.release_date}</h2>
          <h2>{data?.movie.genres.join(", ")}</h2>
        </div>
        <p className="max-w-full my-2 text-xs">{data?.movie.overview}</p>
        <div className="flex gap-5">
          <CustomButton>Watch Now</CustomButton>
          <HugIcon
            shouldFill={
              watchList.includes(data?.movie._id.toString()!) ? true : false
            }
            className="size-10 cursor-pointer hover:scale-105 transition-all duration-300"
            handleClick={() =>
              watchList.includes(data?.movie._id.toString()!)
                ? removeMovieFromWatchList(data?.movie._id.toString()!)
                : addMovieToWatchList(data?.movie._id.toString()!)
            }
          />
        </div>
      </div>
    </div>
  );
}

export default SingleMoviePage;
