import axios from "axios"
import Cookies from "js-cookie"

export const loggedin= async (setdata)=> {
    const res= await axios({
        url: "http://localhost:4000/loggedin",
        method: "post",
        responseType: "json",
        data: {
            u_id: Cookies.get("u_id") || ""
        }
    })
    const result= await res.data
    return setdata(()=> result)
}