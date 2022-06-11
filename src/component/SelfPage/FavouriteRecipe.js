import { Skeleton } from '@mui/material'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { favourite } from '../function/favourite'

const FavouriteRecipe = (props) => {
  const [data, setdata]= useState(()=> [])
  const [loading, setloading]= useState(()=> false)
  useEffect(()=> {
    favourite(props._id, props.favourite_recipe, setdata, setloading)
  }, [props._id, props.favourite_recipe])
  return (
    <div className="dgkefgde" style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
            
        {
            data?.length> 0 && loading=== false && data?.map((item, key)=> <Item key={key} {...item} />)
        } 
        {
            loading=== true && Array.from(Array(12).keys())?.map((item, key)=> <Skeleton key={key} variant="rectangular" style={{width: 195, height: 195, margin: 10, borderRadius: 15 }} />)
        } 
        {
            data?.length<= 0 && loading=== false && <div>Nothing to render</div>
        }
    </div>
  )
}
const Item= (props)=> {
    return (
        <div style={{width: "calc(100% / 3)", height: "calc(100% / 3)", position: "relative", padding: 10,}}>
            <Link to={"/recipe/page/"+ props._id}>
                <div style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", borderRadius: 15, overflow: 'hidden', position: "relative",}}>
                    <img src={props.photo} alt="open" style={{width: "100%", aspectRatio: 1, objectFit: 'cover'}} />
                    <div style={{position: "absolute", zIndex: 9, color: "#fff", textTransform: "capitalize", bottom: 0, left:0 , margin: 10, fontSize: 20, fontWeight: 600}}>{props.title}</div>
                </div>
            </Link>
        </div>
    )
}

export default FavouriteRecipe