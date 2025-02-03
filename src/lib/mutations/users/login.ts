import { useMutation } from "@tanstack/react-query";
import { user } from "../../api";
import {  toast } from 'react-toastify';

const LoginUser = () => {
    const mutation = useMutation({
        mutationFn: async (data: {
            email: string,
            password: string
        }) => {
            const Login = await user.post('/login', data);
            return Login.data;
        },
        mutationKey:['user'],
        onSuccess:()=>{
            toast.success('user login successfully')

        },
        onError:()=>{
           toast.error("failed to login user")
        }
    })

    return mutation
}

export default LoginUser