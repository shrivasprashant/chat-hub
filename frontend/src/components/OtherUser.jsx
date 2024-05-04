import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedUser } from "../redux/userSlice";
const OtherUser = ({user}) => {
    const dispatch = useDispatch()
    const {selectedUser} = useSelector(store=>store.user)
    // const user = props.user
    const selectedUserHandler = (user)=>{
        // console.log(user);
        dispatch(setSelectedUser(user))
    }
    return (
        <>
            <div onClick={()=>selectedUserHandler(user)} className={` ${selectedUser?._id===user?._id ? "bg-[#1d4d65a0]" : ""} flex items-center gap-2 hover:bg-[#00121B]   rounded-sm p-2 cursor-pointer`}>
                <div className="avatar online">
                    <div className="w-12 h-12 overflow-hidden rounded-full">
                        <img
                            src={user?.profilePhoto}
                            alt="user-profile"
                        />
                    </div>
                </div>
                <div className="">
                    <div className="flex gap-2 flex-1 text-white">
                        <p>{user?.fullName}</p>
                    </div>
                </div>
            </div>
            <div className="divider my-0 py-0 h-1 "></div>
        </>
    );
};

export default OtherUser;
