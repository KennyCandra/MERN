// custom to fetch data with refresh token
import { useState } from "react"

let isRefreshing = false
let waittingRequest: (() => void)[] = []

export function useFetchWithRefToken(accessToken: string) {
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    const fetchWithRefToken = async (url: string, option?: RequestInit) => {
        setLoading(true)
        setError(null)

        try {
            let response = await fetch(`http://localhost:8001/${url}`, {
                headers: {
                    Authorization: accessToken,
                    'Content-Type': 'application/json'
                },
                ...option,
            });

            if (response.status === 401) {
                if (!isRefreshing) {
                    isRefreshing = true

                    try {
                        const refreshTokenResponse = await fetch('http://localhost:8001/user/refresh-token', {
                            credentials: "include"
                        });

                        if (!refreshTokenResponse.ok) {
                            window.location.href = '/login'
                            throw new Error('refresh token')
                        }

                        response = await fetch(`http://localhost:8001/${url}`, {
                            ...option,
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
                    return fetchWithRefToken(`http://localhost:8001/${url}`, option)
                }
            }

            return response.json()
        } catch (err) {
            setError('An error Occured please try again')
            throw err
        } finally {
            setLoading(false)
        }
    }

    return { fetchWithRefToken, loading, error }
}

