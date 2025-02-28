import { HugIcon } from "../../assets/images/icons"
import type { Movie } from "../../pages/home/Home"

type MovieProps = {
    isInWatchList: boolean,
    addToWatchList: () => void,
    removeFromWatchList: () => void,
    isActive: boolean,
    setIndex: React.Dispatch<React.SetStateAction<number>>,
    movieKey: number,
    className?: string
    onClick: () => void
    genre: string[]
    year: string
    id: number
    title: string
    image: string
}
function MovieCard({ genre, id, image, title, year, isInWatchList, onClick ,addToWatchList, removeFromWatchList, isActive, setIndex, movieKey, className }: MovieProps) {

    return (
        <div key={id} className={`${!isActive ? 'opacity-60 ' : 'opacity-100'} ${className}`} onClick={onClick}>
            <HugIcon handleClick={() => isInWatchList ? removeFromWatchList() : addToWatchList()} shouldFill={isInWatchList} className="absolute top-0 right-0 size-14 p-2 cursor-pointer active:scale-95 transition-all duration-300" />
            <img src={`https://image.tmdb.org/t/p/original/${image}`} alt="image-bg" className=" object-cover object-center overflow-hidden rounded-lg" onClick={() => { setIndex(movieKey) }} />
            <div className="absolute bottom-0 bg-gradient-white py-2 px-4 opacity-95 rounded-t-lg z-10 w-full">
                <h1 className="text-sm font-semibold">{title}</h1>
                <span className="text-xs font-normal">{year} | {genre.join(', ')}</span>
            </div>
        </div >
    )
}

export default MovieCard