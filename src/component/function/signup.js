import axios from "axios"

export const signup= async (emailOrtele, fullname, username, password, navigate)=> {
    const res= await axios({
        url: "http://localhost:4000/signup",
        method: "post",
        responseType: "json",
        timeout: 1000000, 
        timeoutErrorMessage: "Time out request",
        data: {
            data: {
                emailOrtele: emailOrtele,
                fullname, username, password
            }
        }

    })
    const result= await res.data
    if(result=== "success") {
        return navigate("/login")
    }
}