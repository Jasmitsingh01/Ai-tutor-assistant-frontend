import { useMutation } from "@tanstack/react-query";
import { user } from "../../api";
import { AxiosError } from "axios";
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

        },
        onError:(error:AxiosError)=>{
        }
    })

    return mutation
}

export default CreateUser