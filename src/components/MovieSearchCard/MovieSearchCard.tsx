import { HugIcon } from "../../assets/images/icons";

type MovieProps = {
  isInWatchList: boolean;
  addToWatchList: (movieId: string) => void;
  removeFromWatchList: (movieId: string) => void;
  className: string;
  genre: string[];
  year: string;
  id: string;
  title: string;
  image: string;
};

function MovieSearchCard({
  genre,
  id,
  image,
  title,
  year,
  isInWatchList,
  addToWatchList,
  removeFromWatchList,
  className,
}: MovieProps) {
  return (
    <div key={id} className={className}>
      <HugIcon
        handleClick={() =>
          isInWatchList
            ? removeFromWatchList(id.toString())
            : addToWatchList(id.toString())
        }
        shouldFill={isInWatchList}
        className="absolute top-0 right-0 size-14 p-2 cursor-pointer active:scale-95 transition-all duration-300"
      />
      <img
        src={`https://image.tmdb.org/t/p/original/${image}`}
        alt="image-bg"
        className=" object-cover object-center overflow-hidden rounded-lg"
      />
      <div className="absolute bottom-0 bg-gradient-white py-2 px-4 opacity-95 rounded-t-lg z-10 w-full">
        <h1 className="text-sm font-semibold hover:underline">{title}</h1>
        <span className="text-xs font-normal">
          {year} | {genre.join(", ")}
        </span>
      </div>
    </div>
  );
}

export default MovieSearchCard;
