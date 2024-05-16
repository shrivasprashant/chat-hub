import React, { useEffect, useState } from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import HomePage from './components/HomePage';
import { useDispatch, useSelector } from 'react-redux';
import io from "socket.io-client"
import { setSocket } from './redux/SocketSlice';
import { setOnlineUsers } from './redux/userSlice';
const router = createBrowserRouter([
  {
    path: "/register",
    element: < Signup />
  },
  {
    path: "/",
    element: < Login />
  }, {
    path: "/home",
    element: < HomePage />
  },
])

function App() { 
  const {authUser} = useSelector(store=>store.user)
  const {Socket} = useSelector(store=>store.socket)
  // console.log(Socket);
  const dispatch = useDispatch()
  useEffect(() => {
    if(authUser){
      const socket = io("http://localhost:8080", {
        query:{
          userID:authUser._id
        }
      })
      dispatch(setSocket(socket))
      socket.on("getOnlineUsers", (OnlineUsers)=>{
        dispatch(setOnlineUsers(OnlineUsers))
      })
      return ()=> socket.close()
    }else{
      if(Socket){
        Socket.close()
      dispatch(setSocket(null))
      }
    }
  }, [authUser])
  
  return (
    <div className="p-4 h-screen flex items-center justify-center ">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
