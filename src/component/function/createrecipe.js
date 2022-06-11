import axios from "axios"

export const createrecipe= async (files, recipe, description, method, id, navigate)=> {
    const formData= new FormData()
    formData.append("file", files[0])
    const res= await axios({
        url: "http://localhost:4000/upload/image/cloud",
        method: "post",
        data: formData,
        responseType: "json"
    })
    const result= await res.data
    const res2= await axios({
        url: "http://localhost:4000/create/recipe",
        method: "post",
        responseType: "json",
        data: {
            title: recipe.title,
            serving: recipe.serving, 
            level: recipe.level,
            cooktime: recipe.cooktime,
            ingredients: recipe.ingredients,
            description:description,
            method: method,
            photo: result.secure_url,
            own: id,
        }
    })
    const result2= await res2.data
    if(result2=== "success") {
        navigate("/user/"+id+"/my_recipes")
    }
}