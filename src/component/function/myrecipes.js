import axios from "axios"
import { fakesleep } from "./fake_sleep"

export const myrecipe= async (id, setdata, setloading)=> {
    setloading(()=> true)
    await fakesleep(1000)
    const res= await axios({
        url: "http://localhost:4000/myrecipe",
        method: "post",
        responseType: "json",
        data: {
            _id: id
        }
    })
    setloading(()=> false)
    const result= await res.data
    return setdata(result)
}