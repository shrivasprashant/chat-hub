import axios from 'axios'
import  { useEffect } from 'react'
import {useDispatch} from "react-redux"
import { setOtherUsers } from '../redux/userSlice'
const useGetOtherUsers = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        const fetchOtherUsers = async()=>{
            try {
                axios.defaults.withCredentials = true;
                const res = await axios.get("http://localhost:8080/users/")
                // console.log(res);
                dispatch(setOtherUsers(res.data))
            } catch (error) {
                console.log(error);
            }
        }
        fetchOtherUsers()
    }, [])

}

export default useGetOtherUsers