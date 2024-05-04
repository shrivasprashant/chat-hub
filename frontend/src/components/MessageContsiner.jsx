import React, { useEffect } from 'react'
import SendInput from './SendInput'
import Messages from './Messages'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedUser } from '../redux/userSlice'


const MessageContsiner = () => {
    const { selectedUser , authUser } = useSelector(store => store.user)
    const dispatch = useDispatch()
    useEffect(() => {
        return () => dispatch(setSelectedUser(null))
    }, [])

    return (
        <>
            {
                selectedUser ? (
                    <div className='md:min-w-[550px] flex flex-col '>
                        <div className="flex items-center gap-2 bg-[#092431] p-3 text-white">
                            <div className="avatar online">
                                <div className="w-12 h-12 overflow-hidden rounded-full">
                                    <img
                                        src={selectedUser?.profilePhoto}
                                        alt="user-profile"
                                    />
                                </div>
                            </div>
                            <div className="">
                                <div className="flex gap-2 flex-1">
                                    <p>{selectedUser?.fullName}</p>
                                </div>
                            </div>
                        </div>
                        <Messages />
                        <SendInput />
                    </div>
                ) : (
                    <div className="md:min-w-[550px] flex flex-col items-center justify-center">
                        <p className='text-2xl capitalize'>hii, {authUser?.username}</p>
                        <h1 className='capitalize text-xl font-semibold'>Lets start conversation</h1>
                    </div>
                )
            }
        </>

    )
}

export default MessageContsiner