import { useMutation } from "@tanstack/react-query";
import { user } from "../../api";
import {  toast } from 'react-toastify';

const RefreshUser = () => {
    const mutation = useMutation({
        mutationFn: async (data: {
            name: string,
            email: string,
            password: string
        }) => {
            const Refresh = await user.post('/refresh', data);
            return Refresh.data;
        },
        mutationKey:['user'],
        onSuccess:()=>{
            toast.success('user Refresh successfully')

        },
        onError:()=>{
           toast.error("failed to Refresh user")
        }
    })

    return mutation
}

export default RefreshUser
