import { Link } from "react-router-dom";
import { Movie } from "../../pages/home/Home";

type listProps = {
  _id: string;
  name: string;
  description: string;
  movie: Movie[];
  className: string;
};

function ListCardComponent({
  _id,
  name,
  description,
  movie,
  className,
}: listProps) {
  return (
    <div className={className} key={_id}>
      <img
        src={
          movie[0] !== undefined
            ? `https://image.tmdb.org/t/p/original/${movie[0].poster_path}`
            : "images/placeholder.jpg"
        }
        alt="image-bg"
        className="w-full h-full overflow-hidden rounded-lg"
      />
      <div className="absolute bottom-0 bg-gradient-white py-2 px-4 opacity-95 rounded-lg z-10 w-full">
        <Link
          className="text-2xl font-semibold hover:underline"
          to={`/list/${_id}`}
        >
          {name}
        </Link>
        <span className="text-sm font-normal">
          {description !== "" && description}
        </span>
      </div>
    </div>
  );
}

export default ListCardComponent;
