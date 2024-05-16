import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./userSlice"
import messageReducer from "./MessageSlice"
import socketReducer from "./SocketSlice"

export const store = configureStore({
    reducer: {
        user:userReducer,
        message:messageReducer,
        socket:socketReducer
    },
})