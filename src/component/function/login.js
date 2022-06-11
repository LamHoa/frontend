import axios from "axios"
import Cookies from 'js-cookie'

export const login= async (emailOrtele, password, navigate, setLoginFailed)=> {
    const res= await axios({
        url: "http://localhost:4000/login",
        method: "post",
        responseType: "json",
        timeout: 1000000, 
        timeoutErrorMessage: "Time out request",
        credentials: true, 
        data: {
            data: {
                emailOrtele: emailOrtele,
                password
            }
        }

    })
    const result= await res.data
    if(result[0]=== "success") {
        Cookies.set("u_id", result[1], {expires: 7})
        window.location.href= "http://localhost:3000/home"
    }
    else {
        setLoginFailed(()=> true)
    }
}