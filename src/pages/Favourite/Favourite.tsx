import { Movie } from '../home/Home'
import FavouriteMovieComponents from '../../components/FavouriteMovieComponents/FavouriteMovieComponents'
import { useAppSelector } from '../../utils/hooks/hooks'
import { useEffect, useState } from 'react'
import { useFetchWithRefToken } from '../../utils/hooks/fetchWithRefreshToken'
import CustomButton from '../../components/button/CustomButton'

interface WatchListMovie {
    backdrop_path: string
    genres: string[]
    overview: string
    poster_path: string;
    release_date: Date;
    title: string;
    vote_average: number;
    vote_count: number;
    _id: number;
}

function Favourite() {
    const { user } = useAppSelector(state => state.userRed)
    const { fetchWithRefToken } = useFetchWithRefToken()
    const [movies, setMoives] = useState<WatchListMovie[]>([])

    const fetchFavouriteList = async () => {
        const response = await fetchWithRefToken(`user/watchlist/${user?.id}`)
        setMoives(response.watchList)
    }

    useEffect(() => {
        if (user) {
            fetchFavouriteList()
        }
    }, [user])

    return (
        <div className='mt-[60px] text-white ml-5'>
            <CustomButton onClick={() => console.log(movies)}>movies</CustomButton>
            <CustomButton onClick={() => console.log(user)}>user</CustomButton>
            <h1 className='font-Poppins text-3xl mb-5 font-semibold'>Favourites</h1>
            <div className='flex gap-5 flex-wrap'>
                {movies.map(movie => {
                    return (
                        <FavouriteMovieComponents
                            key={movie._id}
                            isInWatchList={user?.watchList.includes(movie._id.toString()) ?? false}
                            genre={movie.genres}
                            title={movie.title}
                            year={movie.release_date}
                            image={movie.backdrop_path}
                            id={movie._id}
                            className="w-[348px] h-[259px] relative text-black rounded-lg"
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Favourite
