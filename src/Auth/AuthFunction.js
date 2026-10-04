import axios from "axios";
import { API_URL , LoginAPI, SignUpAPI } from "./NwConfig";

export async function UserSignUPApi(form){
    try{
    const url=API_URL+SignUpAPI
    const res=await axios.post(url,form)
    // console.log("res : ",res);
    
    const resp=res
    return resp
    
    }catch(error){
        // console.log(error.response)
        return error.response
    }
}

export async function UserLoginApi(form){
    try{
        const url=API_URL+LoginAPI
        const res=await axios.post(url,form)
        const resp=res.data
        return resp

    }catch(error){
        // console.log(error)
        return error.response
    }
}