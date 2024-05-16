import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    authUser: null,
    otherUser:null,
    selectedUser:null,
    OnlineUsers:null
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthUser:(state,action) =>{
            state.authUser = action.payload
        },
        setOtherUsers:(state,action) =>{
            state.otherUser = action.payload
        },
        setSelectedUser:(state,action) =>{
            state.selectedUser = action.payload
        },
        setOnlineUsers:(state,action) =>{
            state.OnlineUsers = action.payload
        },
    },
})

export const { setAuthUser,setOtherUsers, setSelectedUser, setOnlineUsers } = userSlice.actions

export default userSlice.reducer