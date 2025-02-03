import { useMutation } from "@tanstack/react-query";
import { user } from "../../api";
import {  toast } from 'react-toastify';

const CreateUser = () => {
    const mutation = useMutation({
        mutationFn: async (data: {
            name: string,
            email: string,
            password: string
        }) => {
            const create = await user.post('/register', data);
            return create.data;
        },
        mutationKey:['user'],
        onSuccess:()=>{
            toast.success('user created successfully')

        },
        onError:()=>{
           toast.error("failed to create user")
        }
    })

    return mutation
}

export default CreateUser