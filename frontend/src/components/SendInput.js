import React, { useState } from 'react'
import { IoMdSend } from "react-icons/io";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setMessages } from '../redux/MessageSlice';
const SendInput = () => {
    const {selectedUser} = useSelector(store=>store.user)
    const dispatch = useDispatch()
    const [message, setmessage] = useState("")
    const {messages} = useSelector(store=>store.message)
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            // axios.defaults.withCredentials = true
            const res = await axios.post(`http://localhost:8080/message/send/${selectedUser?._id}`, {message}, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            })
            dispatch(setMessages([...messages, res?.data?.newMessage]))
            setmessage("")
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <form onSubmit={onSubmitHandler} className='px-4 my-3' action="">
            <div className='w-full relative'>
                <input
                    value={message}
                    type="text"
                    onChange={(e) => (setmessage(e.target.value))}
                    placeholder='send a message'
                    className='border text-sm rounded-lg block w-full bg-[#000D15] text-white border-zinc-500 p-3'
                />
                <button className='absolute items-center inset-y-0 end-4' type='submit'><IoMdSend className='text-white' /></button>
            </div>
        </form>
    )
}

export default SendInput