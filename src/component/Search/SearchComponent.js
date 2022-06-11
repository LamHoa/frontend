import React, { useEffect, useMemo, useState } from 'react'
import { NavBarForSearch } from '../component/Navbar'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import useQuery from '../function/usequery'
import { search } from '../function/search'
import { Link } from 'react-router-dom'
import { Skeleton } from '@mui/material'

export const SearchComponent = (props) => { 
  const height= useMemo(()=> [413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201,413, 245, 188, 201,413, 245, 188, 201,413, 245, 188, 201,413, 245, 188, 201,413, 245, 188, 201,413, 245, 188, 201,413, 245, 188, 201,413, 245, 188, 201,413, 245, 188, 201,413, 245, 188, 201,413, 245, 188, 201,413, 245, 188, 201,413, 245, 188, 201,413, 245, 188, 201,413, 245, 188, 201,413, 245, 188, 201,413, 245, 188, 201,413, 245, 188, 201,413, 245, 188, 201,413, 245, 188, 201,413, 245, 188, 201,413, 245, 188, 201,413, 245, 188, 201,413, 245, 188, 201,413, 245, 188, 201,413, 245, 188, 201,413, 245, 188, 201], [])
  const query= useQuery() 
  const [loading, setloading]= useState(()=> false)
  const [data, setdata]= useState(()=> [])
  useEffect(()=> {
    search(setdata, query.get("query"), setloading)
  }, [query])
  return (
    <>
        <NavBarForSearch setsearch_query={props.setsearch_query} search_query={props.search_query} />
        <div style={{width: "100%", position: "relative", top: 100, display: "flex", justifyContent: "center", marginTop: 30}}>
            <div style={{maxWidth: 630, width: "100%"}}>
                <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
                    <Masonry columnsCount={3} gutter="15px">
                        {
                            data?.length> 0 && loading=== false && data?.map((item, key)=> <ComponentImage key={key} {...item} height={height[parseInt(key)]}  />)
                        } 
                        {
                            loading=== true && height.slice(0, 15)?.map((item, key)=> <Skeleton key={key} variant="rectangular" style={{width: 195, height: parseInt(item), margin: 10, borderRadius: 15 }} />)
                        } 
                        {
                            data?.length<= 0 && loading=== false &&  <div>Nothing to render</div>
                        }       
                    </Masonry>
                </ResponsiveMasonry>
            </div>
        </div>
    </>
  )
}

export const ComponentImage= (props)=> {
    return (
        <div className='dfsdkawaw' style={{display: "block", height: props.height, objectFit: 'cover', width: "100%", position: "relative", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", borderRadius: 10, overflow: "hidden"}}>
            <Link to={"/recipe/page/"+ props._id}>
                <img src={props.photo} alt="open" style={{width: "100%", height: "100%", objectFit: "cover"}} />
                <div style={{position: "absolute", bottom: 0, left: 0, margin: 10, zIndex: 99, color: "#fff", fontWeight: 600, fontSize: 18}}>{props.title}</div>
            </Link>
        </div>
    )
}