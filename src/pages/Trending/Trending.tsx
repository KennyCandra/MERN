
import FavouriteMovieComponents from '../../components/FavouriteMovieComponents/FavouriteMovieComponents'
import { useAppSelector } from '../../utils/hooks/hooks'
import type { Movie } from '../home/Home'

function Trending() {
    const { user, trending } = useAppSelector(state => ({
        user: state.userRed.user,
        trending: state.trendingRed.trending
    }))

    return (
        <div className='mt-[60px] text-white ml-5'>
            <h1 className='font-Poppins text-3xl mb-5 font-semibold'>Trending</h1>
            <div className='flex gap-5 flex-wrap my-10'>
                {trending?.map((movie: Movie) => {
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

export default Trending
