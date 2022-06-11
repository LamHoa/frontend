import axios from "axios"
import { fakesleep } from "./fake_sleep"

export const categories= async (setdata, id, setloading)=> {
    setloading(()=> true)
    await fakesleep(1000)
    const res= await axios({
        url: "http://localhost:4000/categories",
        method: "get",
        params: {
            id: id
        },
        responseType: "json"
    })
    setloading(()=> false)
    const result= await res.data
    return setdata(()=> result)
}