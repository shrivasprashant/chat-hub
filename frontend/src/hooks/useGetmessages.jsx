import axios from 'axios'
import  { useEffect } from 'react'
import {useSelector , useDispatch} from "react-redux"
import { setMessages } from '../redux/MessageSlice'
const useGetmessages =  () => {
    // const {selectedUser} = useSelector(store=>store.user)
    const {selectedUser} = useSelector(store=>store.user)
    const dispatch = useDispatch()
    useEffect(() => {
        const fetchMessages = async ()=>{
            try {
                axios.defaults.withCredentials = true
                const res = await axios.get(`http://localhost:8080/message/${selectedUser?._id}`)
                console.log(res);
                dispatch(setMessages(res.data))
            } catch (error) {
                console.log(error);
            }
        }
        fetchMessages()
    }, [selectedUser])

}

export default useGetmessages