import React, { useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import OtherUsers from './OtherUsers';
import axios from 'axios';
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { setAuthUser, setOtherUsers } from '../redux/userSlice';

const Sidebar = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [search, setsearch] = useState("")
    const {otherUser} = useSelector(store=>store.user)
    const onSearchHandler = (e) => {
        e.preventDefault();
        const conversationUser = otherUser?.find((user) => user.fullName.toLowerCase().includes(search.toLowerCase()));
        if (conversationUser) {
            dispatch(setOtherUsers([conversationUser]));
        } else {
            toast.error("User not found!");
        }
    }
    const logoutHandler = async () => {
        try {
            axios.defaults.withCredentials = true
            const res = await axios.get("http://localhost:8080/users/logout")
            console.log(res);
            toast.success(res.data.message)
            dispatch(setAuthUser(null))
            navigate("/")
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='border-r border-slate-500 flex flex-col'>
            <form onSubmit={onSearchHandler} action="" className='flex items-center gap-2'>
                <input
                    value={search}
                    onChange={(e) => setsearch(e.target.value)}
                    className='input input-bordered rounded-md' type="text"
                    placeholder='Search......'
                />
                <button className='btn' type='submit'><IoSearchOutline size="24px" /></button>
            </form>
            <div className="divider px-3"></div>
            <OtherUsers />
            <div className="m-2">
                <button onClick={logoutHandler} className='btn btn-sm'>Log out</button>
            </div>
        </div>
    )
}

export default Sidebar