import React, { useEffect } from 'react'
import  { useDispatch } from "react-redux"
import { setMessages } from '../redux/MessageSlice'
import { useSelector } from 'react-redux'


const useGetRealTimeMessage = () => {
    const { socket } = useSelector(store => store.socket)
    const { message } = useSelector(store => store.message)
    const dispatch = useDispatch()
    useEffect(() => {
        socket?.on("newMessage", (newMessage) => {
            dispatch(setMessages([...message, newMessage]))
        })
    }, [socket, setMessages, message])

}

export default useGetRealTimeMessage