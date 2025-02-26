import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/rootStore";

export interface User {
    name: string,
    email: string,
    lists: string[],
    watchList: string[],
    id: string,
    reviwes: string[]
    ratedMovies: string[]
}

type initialStateType = {
    user: User | null,
}

const initialState: initialStateType = {
    user: {
        name: '',
        email: '',
        lists: [],
        watchList: [],
        id: '',
        reviwes: [],
        ratedMovies: []
    },
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload
        },
        logout: (state) => {
            state.user = null
        },
        setWatchList: (state, action: PayloadAction<string[]>) => {
            if (state.user) {
                state.user.watchList = action.payload
            }
        },
        addToWatchList: (state, action: PayloadAction<string>) => {
            if (state.user) {
                state.user.watchList.push(action.payload)
            }
        },
        removeFromWatchList: (state, action: PayloadAction<string>) => {
            if (state.user) {
                state.user.watchList = state.user.watchList.filter(id => {
                    return id !== action.payload
                })
            }
        },
    },
})

export const { setUser, logout, setWatchList, addToWatchList, removeFromWatchList } = userSlice.actions

export const selectUser = (state: RootState) => state.userRed.user

export default userSlice.reducer
