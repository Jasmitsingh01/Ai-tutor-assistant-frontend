import axois from "axios"



const baseurl="https:localhost:8000"


export const user=axois.create({
    baseURL:baseurl+'/users',
    withCredentials:true,
    headers:{
        "Authorization" : "Bearer "
    }
})


export const chat=axois.create({
    baseURL:baseurl+'/tutor',
    withCredentials:true,
    headers:{
        "Authorization" : "Bearer "
    }
})

