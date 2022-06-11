import axios from "axios"

export const like_= async (id_user, list_favourite_user, id_recipe)=> {
    const res= await axios({
        url: "http://localhost:4000/like/recipe",
        method: "post",
        data: {
            id_user, list_favourite_user, id_recipe
        }
    })
    const result= await res.data
    return console.log(result)
}