import axios from "axios"

export const avatar_user= async (files, id, setuser)=> {
    const formData= new FormData()
    formData.append("file", files[0])
    const res= await axios({
        url: "http://localhost:4000/upload/image/cloud",
        method: "post",
        data: formData,
        responseType: "json"
    })
    const result= await res.data
    await axios({
        url: "http://localhost:4000/upload/avatar",
        method: "post",
        data: {
            _id: id,
            avatar_user: result.secure_url
        },
        responseType: "json",

    })
    
    return setuser(result.secure_url)
}