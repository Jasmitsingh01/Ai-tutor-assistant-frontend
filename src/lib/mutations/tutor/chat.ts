import { useMutation } from "@tanstack/react-query";
import { chat } from "../../api";

const ChatMutation = () => {
    const mutation = useMutation({
        mutationFn: async (data: {
            question:string
        }) => {
            const Update = await chat.post('/chat', data);
            return Update.data;
        },
        mutationKey:['chat'],
        
    })

    return mutation
}

export default ChatMutation