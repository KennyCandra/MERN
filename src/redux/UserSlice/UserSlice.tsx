import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/rootStore";

export interface User {
    name: string,
    email: string,
    lists: string[],
    watchList: string[],
    id: string,
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

export const { setUser, logout, addToWatchList, removeFromWatchList } = userSlice.actions

export const selectUser = (state: RootState) => state.userRed.user

export default userSlice.reducer
