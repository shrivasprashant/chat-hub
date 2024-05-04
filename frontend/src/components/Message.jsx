import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
const Message = ({ message }) => {
    const { selectedUser, authUser } = useSelector(store => store.user)

    const scroll = useRef()
    useEffect(() => {
        scroll.current?.scrollIntoView({ behavior: "smooth" })
    }, [message])

    return (
        <div ref={scroll} className={`chat ${authUser?._id === message?._id ? 'chat-start' : 'chat-end'} `}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img alt="Tailwind CSS chat bubble component" src={authUser?._id === message?._id ? authUser?.profilePhoto : selectedUser?.profilePhoto} />
                </div>
            </div>
            <div className="chat-header">
                <time className="text-xs opacity-50 text-white">12:45</time>
            </div>
            <div className="chat-bubble">{message?.message}</div>
            <div className="chat-footer opacity-50">
            </div>
        </div>
    )
}

export default Message