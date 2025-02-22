import { HugIcon } from "../../assets/images/icons"
import type { Movie } from "../../pages/home/Home"

type MovieProps = Movie & {
    isInWatchList: boolean,
    addToWatchList: () => void,
    removeFromWatchList: () => void,
    isActive: boolean,
    setIndex: React.Dispatch<React.SetStateAction<number>>,
    movieKey: number,
    className?: string
    onClick: () => void
}
function MovieCard({ genre, id, image, title, year, isInWatchList, addToWatchList, removeFromWatchList, isActive, setIndex, movieKey, className }: MovieProps) {

    return (
        <div key={id} className={`${!isActive ? 'opacity-60 ' : 'opacity-100'} ${className}`}>
            <HugIcon handleClick={() => isInWatchList ? removeFromWatchList() : addToWatchList()} shouldFill={isInWatchList} className="absolute top-0 right-0 size-14 p-2 cursor-pointer active:scale-95 transition-all duration-300" />
            <img src={image} alt="image-bg" className="aspect-[0.81/1] w-[255px] object-cover object-center overflow-hidden rounded-lg" onClick={() => { setIndex(movieKey) }} />
            <div className="absolute bottom-0 bg-gradient-white py-2 px-4 opacity-95 rounded-t-lg z-10 w-full">
                <h1 className="text-2xl font-semibold">{title}</h1>
                <span className="text-sm font-normal">{year} | {genre}</span>
            </div>
        </div >
    )
}

export default MovieCard