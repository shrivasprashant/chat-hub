import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast from "react-hot-toast"
import { useDispatch } from 'react-redux'
import { setAuthUser } from '../redux/userSlice'

const Login = () => {
  const [user, setuser] = useState({
    username: "",
    password: "",
  })

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/users/login", user, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      })
        dispatch(setAuthUser(res.data))
        navigate("/home")
    } catch (error) {
      toast.error(error.response.data.message)
      console.log(error);
    }

    setuser({
      username: "",
      password: "",
    })
  }
  return (
    <div className=''>
      <div className="w-full p-8 rounded-lg shadow-md  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100">
        <h1 className='text-3xl font-bold text-black'>Login</h1>
        <form onSubmit={submitHandler} action="">
          <div className="">
            <label className='label p-2'>
              <span className='label-text text-base text-black'>username</span>
            </label>
            <input
              className='input input-bordered w-full'
              type="text"
              placeholder='Username'
              value={user.username}
              onChange={(e) => setuser({ ...user, username: e.target.value })}
            />
          </div>
          <div className="">
            <label className='label p-2'>
              <span className='label-text text-base text-black'>password</span>
            </label>
            <input
              className='input input-bordered w-full'
              type="password"
              placeholder='Password'
              value={user.password}
              onChange={(e) => setuser({ ...user, password: e.target.value })}
            />
          </div>
          <div className="my-3 flex center">
            <p className='mr-2'>you don't have an account</p>
            <Link to="/register">signup</Link>
          </div>
          <div className="w-full ">
            <button type='submit' className="w-full btn btn-outline btn-primary">Signin</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login