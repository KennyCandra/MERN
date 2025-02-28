import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { setUser } from "../../redux/UserSlice/UserSlice";
import { useFetchWithRefToken } from "../../utils/hooks/fetchWithRefreshToken";
import { useAppDispatch } from "../../utils/hooks/hooks";
import { setTrendingMovies } from "../../redux/TrendingSlice/Trending";

const RequireAuth = () => {
    const dispatch = useAppDispatch();
    const { fetchWithRefToken, loading, error } = useFetchWithRefToken();

    const fetchUser = async () => {
        const user = await fetchWithRefToken('user')
        dispatch(setUser(user.user))
    }

    const fetchTopMovies = async () => {
        const topMovie = await fetchWithRefToken('top-movies')
        dispatch(setTrendingMovies(topMovie.topMovies))
    }

    useEffect(() => {
        fetchUser()
        fetchTopMovies()
    }, [])

    if (loading) return <h1>Loading....</h1>


    return error ? <Navigate to='/login' /> : <Outlet />;
};

export default RequireAuth;

