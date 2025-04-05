import { HugIcon } from "../../assets/images/icons";

type MovieProps = {
  isInWatchList: boolean;
  className: string;
  year: any;
  genre: string[];
  id: number;
  image: string;
  title: string;
  addToWatchList: (movieId: string) => void;
  removeFromWatchList: (movieId: string) => void;
  movieId: string;
};

function FavouriteMovieComponents({
  genre,
  id,
  image,
  isInWatchList,
  title,
  year,
  className,
  addToWatchList,
  removeFromWatchList,
  movieId,
}: MovieProps) {
  return (
    <div className={className} key={id}>
      <HugIcon
        handleClick={() =>
          !isInWatchList
            ? addToWatchList(movieId)
            : removeFromWatchList(movieId)
        }
        shouldFill={isInWatchList}
        className="absolute top-0 right-0 size-14 p-2 cursor-pointer active:scale-95 transition-all duration-300"
      />
      <img
        src={`https://image.tmdb.org/t/p/original/${image}`}
        alt="image-bg"
        className="w-full h-full overflow-hidden rounded-lg"
      />
      <div className="absolute bottom-0 bg-gradient-white py-2 px-4 opacity-95 rounded-lg z-10 w-full">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <span className="text-sm font-normal">{year}</span>
        <p className="text-sm font-normal">{genre.join(", ")}</p>
      </div>
    </div>
  );
}

export default FavouriteMovieComponents;
