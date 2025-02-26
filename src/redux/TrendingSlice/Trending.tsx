import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/rootStore";
import type { Movie } from "../../pages/home/Home";


type initialStateType = {
    trending: Movie[]
}

const initialState: initialStateType = {
    trending: []
}

const TrendingSlice = createSlice({
    name: 'trending',
    initialState,
    reducers: {
        setTrendingMovies: (state, action: PayloadAction<Movie[]>) => {
            state.trending = action.payload
        },
    },
},
)

export const { setTrendingMovies } = TrendingSlice.actions

export const selectTrending = (state: RootState) => state.trendingRed.trending

export default TrendingSlice.reducer
