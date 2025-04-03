import type { Movie } from '../home/Home'
import CustomButton from '../../components/button/CustomButton'
import { HugIcon } from '../../assets/images/icons'

interface Response {
    movie: Movie;
    message: string
}

async function SingleMoviePage() {
    const response = await fetch(`http://localhost:8001/movies/6793e4720d7163b81f79632f`)
    const data: Response = await response.json()
    const movie = data.movie
    console.log(movie)

    return (
        <div className='mt-5 flex text-white gap-4 items-center justify-center'>
            <div className='w-[534px] h-[431px] overflow-hidden rounded-md border-white items-center flex'><img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} /></div>
            <div className='text-white font-Poppins w-1/2'>
                <h1>{data.movie?.title}</h1>
                <div>
                    <h2>{movie?.release_date}</h2>
                    <h2>{movie?.genres.join(", ")}</h2>
                </div>
                <p className='max-w-full my-2 text-xs'>{movie?.overview}</p>
                <div className='flex gap-5'>
                    <CustomButton>Watch Now</CustomButton>
                    <HugIcon shouldFill={false} className='size-10 cursor-pointer hover:scale-105 transition-all duration-300' handleClick={() => console.log('hello')} />
                </div>
            </div>
        </div>
    )
}

export default SingleMoviePage
