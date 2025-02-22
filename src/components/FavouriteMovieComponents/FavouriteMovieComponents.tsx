import { HugIcon } from "../../assets/images/icons";
import { Movie } from "../../pages/home/Home"

type MovieProps = Movie & {
    isInWatchList: boolean;
    className: string
}

function FavouriteMovieComponents({ genre, id, image, isInWatchList, title, year, className }: MovieProps) {
    return (
        <div className={className} key={id}>
            <HugIcon handleClick={() => console.log(isInWatchList)} shouldFill={isInWatchList} className="absolute top-0 right-0 size-14 p-2 cursor-pointer active:scale-95 transition-all duration-300" />
            <img src={image} alt="image-bg" className="w-full h-full overflow-hidden rounded-lg" />
            <div className="absolute bottom-0 bg-gradient-white py-2 px-4 opacity-95 rounded-t-lg z-10 w-full">
                <h1 className="text-2xl font-semibold">{title}</h1>
                <span className="text-sm font-normal">{year} | {genre}</span>
            </div>
        </div>
    )
}

export default FavouriteMovieComponents
