import axios from "axios"
import { fakesleep } from "./fake_sleep"

export const search= async (setdata, search_query, setloading)=> {
    setloading(()=> true)
    await fakesleep(1000)
    const res= await axios({
        url: "http://localhost:4000/search",
        method: "post",
        data: {
            search_query: search_query
        },
    })
    setloading(()=> false)
    const result= await res.data
    return setdata(result)
}