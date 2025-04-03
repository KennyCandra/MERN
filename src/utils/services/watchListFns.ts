import userStore from "../../zustand/UserStore/UserStore"
import { useFetchWithRefToken } from "../hooks/fetchWithRefreshToken"


export const useWatchListFunctions = () => {
    const { addToWatchList, removeFromWatchList, accessToken } = userStore()
    const { error, fetchWithRefToken, loading } = useFetchWithRefToken(accessToken)

    const addMovieToWatchList = async (movieId: string) => {
        addToWatchList(movieId)
        try {
            const response = await fetchWithRefToken('user/watchlist/add', {
                method: 'POST',
                headers: {
                    Authorization: accessToken,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ movieId: movieId })
            })

            if (!response.ok) {
                removeFromWatchList(movieId)
                throw new Error('Failed to add movie to watchlist')
            }
            const res = await response.json()
            return res
        } catch (err) {
            removeFromWatchList(movieId)
            console.error(error)
        }
    }

    const removeMovieFromWatchList = async (movieId: string) => {
        removeFromWatchList(movieId)
        const response = await fetchWithRefToken('user/watchlist/remove', {
            method: "DELETE",
            headers: {
                Authorization: accessToken,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ movieId: movieId })
        })

        if (!response.ok) {
            addToWatchList(movieId)
            throw new Error('Failed to remove movie from watchlist')
        }

        const res = response.json()
        return res
    }


    return {
        loading,
        error,
        addMovieToWatchList,
        removeMovieFromWatchList
    }


}
