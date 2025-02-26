import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { setUser } from "../../redux/UserSlice/UserSlice";
import { useFetchWithRefToken } from "../../utils/hooks/fetchWithRefreshToken";
import { useAppDispatch } from "../../utils/hooks/hooks";
import { setTrendingMovies } from "../../redux/TrendingSlice/Trending";


const RequireAuth = () => {
    const dispatch = useAppDispatch();
    const [success, setSuccess] = useState<boolean>(true)
    const { fetchWithRefToken, loading } = useFetchWithRefToken()

    const tryFetchUser = async () => {
        const response = await fetchWithRefToken('user')
        dispatch(setUser(response.user))
    }

        const fetchTopMovies = async () => {
            const response = await fetchWithRefToken('top-movies')
            dispatch(setTrendingMovies(response.topMovies))
        }

    useEffect(() => {
        tryFetchUser()
        fetchTopMovies()
    }, [])

    if (loading) {
        return <div>Loading...</div>
    }

    return success ? <Outlet /> : <Navigate to={'/login'} />

}


export default RequireAuth;

