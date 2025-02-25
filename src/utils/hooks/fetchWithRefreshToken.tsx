// custom to fetch data with refresh token
import { useState } from "react"
import { useNavigate } from "react-router"

let isRefreshing = false
let waittingRequest: (() => void)[] = []

export function useFetchWithRefToken() {
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)
    const navigate = useNavigate()

    const fetchWithRefToken = async (url: string, option?: RequestInit) => {
        setLoading(true)

        try {
            let response = await fetch(url, {
                ...option,
                credentials: "include"
            });

            if (response.status === 401) {
                if (!isRefreshing) {
                    isRefreshing = true

                    try {
                        const refreshTokenResponse = await fetch('http://localhost:8001/user/refresh-token', {
                            ...option,
                            credentials: "include"
                        });

                        if (!refreshTokenResponse.ok) {
                            navigate('/login')
                            throw new Error('refresh token')
                        }

                        response = await fetch(url, {
                            ...option,
                            credentials: "include"
                        });


                        waittingRequest.forEach(cb => cb())
                        waittingRequest = []
                    } finally {
                        isRefreshing = false
                    }
                } else {
                    await new Promise<void>((resolve) => {
                        waittingRequest.push(resolve)
                    })
                    return fetchWithRefToken(url, option)
                }
            }

            return response
        } catch (err) {
            setError('An error Occured please try again')
            throw err
        } finally {
            setLoading(false)
        }
    }

    return { fetchWithRefToken, loading, error }
}

