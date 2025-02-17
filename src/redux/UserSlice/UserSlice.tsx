import { createSlice } from "@reduxjs/toolkit";

interface User {
    name: string,
    email: string,
    lists: [],
    watchList: [],
    id: string,
}

type initialStateType = {
    user: User | null,
    error: string | null,
}

const initialState: initialStateType = {
    user: null,
    error: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        logout: (state) => {
            state.user = null
        },
    },
})

export const { setUser, logout } = userSlice.actions
export default userSlice.reducer
