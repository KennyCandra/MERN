
import {useState } from 'react'
import FavouriteMovieComponents from '../../components/FavouriteMovieComponents/FavouriteMovieComponents'
import type { Movie } from '../home/Home'
import { useQuery } from '@tanstack/react-query'

function Trending() {
    const [trending, setTrending] = useState<Movie[] | null>(null)

    const { isLoading} = useQuery({
        queryKey: ['trending'],
        queryFn: () => fetch('http://localhost:8001/top-movies').then(res => res.json()).then(response => {
            setTrending(response.topMovies)
            return response
        }),
      })

    if (isLoading) return <div>loading.....</div>


    return (
        <div className='mt-[60px] text-white ml-5'>
            <h1 className='font-Poppins text-3xl mb-5 font-semibold'>Trending</h1>
            <div className='flex gap-5 flex-wrap my-10'>
                {trending?.map((movie: Movie) => {
                    return (
                        <FavouriteMovieComponents
                            key={movie._id}
                            // isInWatchList={user?.watchList.includes(movie._id.toString()) ?? false}
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
