import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../UserSlice/UserSlice";
import TrendingReducer from "../TrendingSlice/Trending"

const store = configureStore({
    reducer: {
        userRed: userReducer,
        trendingRed: TrendingReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
