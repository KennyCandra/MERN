import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../UserSlice/UserSlice";

const store = configureStore({
    reducer: {
        userRed: userReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>

export default store
