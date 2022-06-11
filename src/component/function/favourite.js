import axios from "axios"
import { fakesleep } from "./fake_sleep"

export const favourite= async (id, favourite, setdata, setloading)=> {
    setloading(()=> true)
    await fakesleep(1000)
    const res= await axios({
        url: "http://localhost:4000/favourite",
        method: "post",
        responseType: "json",
        data: {
            _id: id,
            favourite: favourite
        }
    })
    setloading(()=> false)
    const result= await res.data
    return setdata(result)
}