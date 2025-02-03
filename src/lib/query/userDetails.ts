import { useQuery } from "@tanstack/react-query";
import { user } from "../api";

const userDeatils = () => {
    const mutation = useQuery({
        queryKey:["user"],
        queryFn:async()=>{
            const userDeatils=await user.get('/user-details')
            return userDeatils.data
        }
    })

    return mutation
}

export default userDeatils