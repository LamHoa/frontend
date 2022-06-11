import React, { useEffect, useMemo, useRef } from 'react'
import { useState } from 'react'
import { NavBarForHome } from '../../component/Navbar'
import { categories } from '../../function/categories'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import { ComponentImage } from '../../Search/SearchComponent'
import { Skeleton } from '@mui/material'

const HomePage = (props) => {
  const myref= useRef()
  useEffect(()=> {
    document.body.style.background= "#f0f0f0"
    return ()=> document.body.style.background= "#fff"
  }, [])
  const scrollInto= ()=> {
    myref?.current.scrollIntoView({behavior: "smooth"})
  }
const [selected, setselected]= useState(()=> 1)

  return (
    <>
        <NavBarForHome {...props} scrollInto={scrollInto} search_query={props.search_query} setsearch_query={props.setsearch_query} />
        <div className="dsk_5" style={{background: "#f0f0f0"}}>
            <div className='dsddds' style={{width: "100%", display: 'flex', flexDirection: "row", justifyContent: "center", alignItems: 'center',}}>
                <div style={{flex: "1 1 0", display: 'flex', flexDirection: "column", }}>
                    <Quote />
                </div>
                <div style={{flex: "1 1 0", display: "flex", justifyContent: 'center',alignItems: 'center',}}>
                    <img src="https://res.cloudinary.com/cockbook/image/upload/v1654170666/single/jonathan-borba-Gkc_xM3VY34-unsplash_1_qst3ej.png" alt="open" style={{width: 500, aspectRatio: 835/1138, transform: "rotate(180deg)"}} />
                </div>
            </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div style={{width: "100%", padding: "0 100px", background: "#f0f0f0", display: "flex", flexDirection: "row", gap: 10, justifyContent: 'center'}}>
            <OptionCategory myref={myref}selected={selected} setselected={setselected} />
            <FilterCategory selected={selected} />
        </div>
    </>
  )
}
const Quote= (props)=> {
    return (
        <div className='fkd' style={{display: 'flex', flexDirection: "column", justifyContent: 'center',alignItems: 'center',}}>
            <img src="https://res.cloudinary.com/cockbook/image/upload/v1654170677/single/logo-01_1_d3iutp.png" alt="open" style={{width: 200, height: 200}} />
            <div style={{fontSize: 40, fontWeight: 600, textTransform: "uppercase"}}>Bon appetit</div>
            <br />
            <div className="dsewl">
                <div style={{textAlign: "justify"}}>“A recipe has no soul.</div>
                <div> You, as the cook, must bring the soul to the recipe.”</div>
                <div> – Thomas Keller</div>
            </div>
        </div>
    )
}
const OptionCategory= (props)=> {
    const array_options= ["popular", "breakfast", "lunch", "dinner"]
    return (
        <div className="dskwewe" style={{width: 290, height: 410, padding: 20, background: '#FFD25A', borderRadius: 15, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: 'center', position: "relative"}}>
            <div ref={props.myref} style={{position: "absolute", top: -100, width: "100%"}}></div>
            <div style={{fontSize: 40,}}>Categories</div>
            <br />
            {
                array_options?.map((item, key)=> <TemplateSelect selected={props.selected} setselected={props.setselected} id={parseInt(key) + 1} key={key} value={item} />)
            }
        </div>
    )
}
const FilterCategory= (props)=> {
    const height= useMemo(()=> [413, 245, 188, 201, 188,413, 245, 403, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201, 188,413, 245, 188, 201,413, 245, 188, 201,413, 245, 188, 201,413, 245, 188, 201,413, 245, 188, 201,413, 245, 188, 201,413, 245, 188, 201,413, 245, 188, 201,413, 245, 188, 201,413, 245, 188, 201,413, 245, 188, 201,413, 245, 188, 201,413, 245, 188, 201,413, 245, 188, 201,413, 245, 188, 201,413, 245, 188, 201,413, 245, 188, 201,413, 245, 188, 201,413, 245, 188, 201,413, 245, 188, 201,413, 245, 188, 201,413, 245, 188, 201,413, 245, 188, 201,413, 245, 188, 201,413, 245, 188, 201,413, 245, 188, 201,413, 245, 188, 201,413, 245, 188, 201], [])
    const [data, setdata]= useState(()=> [])
    const [loading, setloading]= useState(()=> false)
    useEffect(()=> {
        categories(setdata, props.selected, setloading)
    }, [props.selected])
    return (
        <div className="keqw" style={{width: 630,}}>
            <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
                <Masonry columnsCount={3} gutter="15px">
                    {
                        data?.length>0 && loading=== false && data?.map((item, key)=> <ComponentImage height={parseInt(height[key])} key={key} {...item} />)
                    }
                    {
                        loading=== true && height.slice(0, 10).map((item, key)=> <Skeleton key={key} variant="rectangular" width={210} height={parseInt(item)} style={{borderRadius: 10}} />)
                    }
                    {
                        loading=== false && data?.length<=0 && <div>Nothing to render</div>
                    }
                </Masonry>
            </ResponsiveMasonry>
            
        </div>
    )
}

const TemplateSelect= (props)=> {
    return (
        <div data-id={props.id} onClick={()=> {
            props.setselected(()=> props.id)
        }} className="kewsd" style={{width: 189, height: 46, display: "flex", justifyContent: 'center',alignItems: "center", textTransform: "capitalize", borderRadius: 80, color: props.selected.toString()=== props.id.toString() ? "#fff" : "#000", border: "1px solid #000", background: props.selected.toString()=== props.id.toString() ? "#000" : "inherit", marginBottom: 8, cursor: "pointer"}}>
            {props.value}
        </div>
    )
}

export default HomePage