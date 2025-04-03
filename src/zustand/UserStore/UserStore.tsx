import { create } from 'zustand'

type State = {
    accessToken: string
    watchList: string[]
    name: string,
    isAuthenticated: boolean
}

type Actions = {
    setWatchList: (watchList: State['watchList']) => void,
    setAccessToken: (accessToken: State['accessToken']) => void,
    setUser: (name: State['name']) => void,
    setIsAuthenticated: (isAuthenticated: State['isAuthenticated']) => void,
    addToWatchList: (movieId: string) => void
    removeFromWatchList: (movieId: string) => void
}

const userStore = create<State & Actions>((set) => ({
    accessToken: '',
    watchList: [],
    name: '',
    isAuthenticated: false,

    setWatchList: (watchList: string[]) => set({ watchList }),
    setAccessToken: (accessToken: string) => set({ accessToken }),
    setUser: (name: string) => set({ name }),
    setIsAuthenticated: (isAuthenticated: boolean) => set({ isAuthenticated }),
    addToWatchList: (movieId: string) => set(state => ({
        ...state,
        watchList: [...state.watchList, movieId]
    })),
    removeFromWatchList: (movieId: string) => set(state => ({
        ...state,
        watchList: state.watchList.filter(id => id !== movieId)
    }))
}))


export default userStore