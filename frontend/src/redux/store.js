import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./userSlice"
import messageReducer from "./MessageSlice"

export const store = configureStore({
    reducer: {
        user:userReducer,
        message:messageReducer
    },
})