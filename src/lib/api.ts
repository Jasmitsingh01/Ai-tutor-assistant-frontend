import axois from "axios"


const baseurl='https://mybackend-pkg9.onrender.com'


export const user=axois.create({
    baseURL:baseurl+'/api/users',
    withCredentials:true,
    headers:{
        "Authorization" : "Bearer ",
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
    }
})


export const chat=axois.create({
    baseURL:baseurl+'/api/tutor',
    withCredentials:true,
    headers:{
        "Authorization" : "Bearer ",
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
    }
})

