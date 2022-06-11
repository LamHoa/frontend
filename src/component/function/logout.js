import Cookies from "js-cookie"

export const logout= ()=> {
    Cookies.remove("u_id")
    window.location.href= "http://localhost:3000/login"
}   