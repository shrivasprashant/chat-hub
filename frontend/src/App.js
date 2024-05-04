import React, { useEffect, useState } from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import HomePage from './components/HomePage';
import { useSelector } from 'react-redux';
import io from "socket.io-client";
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
  const [socket, setsocket] = useState(null)
  const {authUser} = useSelector(store=>store.user)
  useEffect(() => {
    if(authUser){
      const socket = io("http://localhost:8080", {
        
      })
    }
    setsocket(socket)
  }, [authUser])
  
  return (
    <div className="p-4 h-screen flex items-center justify-center ">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
