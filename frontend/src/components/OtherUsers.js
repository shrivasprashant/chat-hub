import React from 'react'
import OtherUser from './OtherUser'
import useGetOtherUsers from '../hooks/useGetOtherUsers'
import { useSelector } from 'react-redux'

const OtherUsers = () => {
    useGetOtherUsers()
    const { otherUser } = useSelector(store => store.user)
    if (!OtherUser) return  //early return in react
    return (
        <div className='overflow-auto flex-1'>
            {
                otherUser?.map((user) => {
                    return (
                        <OtherUser key={user._id} user={user} />
                    )
                })
            }

        </div>
    )
}

export default OtherUsers