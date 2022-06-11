import axios from "axios"

export const detailrecipe= async (id, setdata)=> {
    const res= await axios({
        url: "http://localhost:4000/detailrecipe",
        method: "post",
        responseType: "json",
        data: {
            _id: id
        }
    })
    const result= await res.data
    return setdata(result[0])
}