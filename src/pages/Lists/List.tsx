import { Movie } from '../home/Home'
import FavouriteMovieComponents from '../../components/FavouriteMovieComponents/FavouriteMovieComponents'
import { useEffect } from 'react'
import { useFetchWithRefToken } from '../../utils/hooks/fetchWithRefreshToken'

function List() {
    const { fetchWithRefToken } = useFetchWithRefToken()

    useEffect(() => {
        const fetchLists = async () => {
            const response = await fetchWithRefToken('http://localhost:8001/list/67b8ce505128ab7bb36086fd/lists', {
                credentials: 'include'
            })
            console.log(response)
        }
        console.log('i am here')
        fetchLists()
    }, [])

    const movie = [
        {
            id: 1,
            genre: ["Action", "Adventure"],
            title: "First movie",
            year: 2024,
            image: "/images/background.jpg",
        },
        {
            id: 2,
            genre: ["Action", "Adventure"],
            title: "Second movie",
            year: 2024,
            image: "/images/background.jpg",
        },
    ]
    return (
        <div className='mt-[60px] text-white ml-5'>
            <h1 className='font-Poppins text-3xl mb-5 font-semibold'>Trending</h1>
            <div className='flex gap-5 flex-wrap'>
                {movie.map(movie => {
                    return (
                        <FavouriteMovieComponents
                            key={movie.id}
                            // isInWatchList={user?.watchList.includes(movie.id.toString()) ?? false}
                            genre={movie.genre}
                            title={movie.title}
                            year={movie.year}
                            image={movie.image}
                            id={movie.id}
                            className="w-[348px] h-[259px] relative text-black rounded-lg"
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default List
