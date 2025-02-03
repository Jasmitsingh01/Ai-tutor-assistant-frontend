import { useMutation } from "@tanstack/react-query";
import { user } from "../../api";
import {  toast } from 'react-toastify';

const UpdateUser = () => {
    const mutation = useMutation({
        mutationFn: async (data: FormData) => {
            const Update = await user.patch('/update', data);
            return Update.data;
        },
        mutationKey:['user'],
        onSuccess:()=>{
            toast.success('user Update successfully')

        },
        onError:()=>{
           toast.error("failed to Update user")
        }
    })

    return mutation
}

export default UpdateUser
