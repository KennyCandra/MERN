import { useParams } from 'react-router-dom'

function SingleMoviePage() {
    const { id } = useParams()
    return (
        <div className='mt-5 text-white'>
            {id}
            hello
        </div>
    )
}

export default SingleMoviePage
