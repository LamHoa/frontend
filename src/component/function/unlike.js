import axios from "axios"

export const unlike= async (id_user, list_favourite_user, id_recipe)=> {
    const res= await axios({
        url: "http://localhost:4000/unlike/recipe",
        method: "post",
        data: {
            id_user, list_favourite_user, id_recipe
        }
    })
    const result= await res.data
    return console.log(result)
}