import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import { setUser } from "../../redux/UserSlice/UserSlice";


const RequireAuth = () => {
    const [isTokenValid, setIsTokenValid] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
    const dispatch = useDispatch();


    const fetchUser = async (): Promise<boolean> => {
        try {
            const apiRes = await fetch(`http://localhost:8001/user/user`, {
                method: "GET",
                credentials: "include",
                headers: {

                    "Content-Type": "application/json",
                },
            });
            if (apiRes.ok) {
                const data = await apiRes.json();
                dispatch(setUser(data.user));
                return true
            }

            return false

        } catch (error) {
            console.log(error);
            return false
        }
    };

    const handleRefreshTokenReq = async (): Promise<boolean> => {
        try {
            const apiRes = await fetch(`http://localhost:8001/user/refresh-token`, {
                method: "GET",
                credentials: "include",

            });
            if (apiRes.ok) {
                return true
            }
            return false
        } catch (error) {
            console.log(error);
            return false
        }
    }


    const checkTokens = async (): Promise<boolean> => {
        try {
            const isUserFetched = await fetchUser();
            if (!isUserFetched) {
                const isRefreshTokenReq = await handleRefreshTokenReq();
                if (!isRefreshTokenReq) {
                    return false
                }
                await fetchUser();
                return true
            }
            return true
        } catch (error) {
            console.error(error);
            return false
        }
    }


    const checkTokenValidity = async () => {
        try {
            const isTokenValid = await checkTokens();
            if (!isTokenValid) {
                setIsTokenValid(false);
                return
            }
            setIsTokenValid(true);
        } catch (error) {
            console.error(error);
            setIsTokenValid(false);
        } finally {
            setLoading(false);
        }
    }



    useEffect(() => {
        checkTokenValidity();
    }, [])


    if (loading) {
        return <div>Loading...</div>
    }

    return isTokenValid ? <Outlet /> : <Navigate to="/login" />

}


export default RequireAuth;

