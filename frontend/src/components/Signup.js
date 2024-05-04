import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from "react-hot-toast"

const Signup = () => {
  const [user, setuser] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: ""
  })

  const navigate = useNavigate()
  const handleCheck = (gender) => {
    setuser({ ...user, gender })
  }
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/users/register", user, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      })
      if (res.data.success) {
        toast.success(res.data.success)
        navigate("/")
      }
      console.log(res);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message)
    }
    setuser({
      fullName: "",
      username: "",
      password: "",
      confirmPassword: "",
      gender: ""
    })
  }

  return (
    <div className=''>
      <div className="w-full p-8 rounded-lg shadow-md  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100">
        <h1 className='text-3xl font-bold text-black'>Signup</h1>
        <form onSubmit={submitHandler} action="">
          <div className="">
            <label className='label p-2'>
              <span className='label-text text-base text-black'>full name</span>
            </label>
            <input
              className='input input-bordered w-full'
              type="text"
              placeholder='full name'
              value={user.fullName}
              onChange={(e) => setuser({ ...user, fullName: e.target.value })}
            />
          </div>
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
          <div className="">
            <label className='label p-2'>
              <span className='label-text text-base text-black'>confirm password</span>
            </label>
            <input
              className='input input-bordered w-full'
              type="password"
              placeholder='confirm password'
              value={user.confirmPassword}
              onChange={(e) => setuser({ ...user, confirmPassword: e.target.value })}
            />
          </div>
          <div className="my-3 flex center gap-2 ">
            <div className="flex center">
              <p>male</p>
              <input
                type="checkbox"
                className="checkbox"
                onChange={(e) => handleCheck("male")}
                checked={user.gender === "male"}
              />
            </div>
            <div className="flex center">
              <p>female</p>
              <input type="checkbox"
                className="checkbox"
                onChange={(e) => handleCheck("female")}
                checked={user.gender === "female"}
              />
            </div>
          </div>
          <div className="my-3 flex center">
            <p className='mr-2'>already have an account</p>
            <Link to="/">signin</Link>
          </div>
          <div className="w-full ">
            <button type='submit' className="w-full btn btn-outline btn-primary">Signup</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup