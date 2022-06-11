import React, { useState } from 'react'
import { Navigate, NavLink, Route, Routes } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Navbar from '../component/Navbar'
import CreateRecipes from './CreateRecipes'
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { avatar_user } from '../function/avatar_user'
import MyRecipes from './MyRecipes'
import FavouriteRecipe from './FavouriteRecipe'

const SelfPage = (props) => {
  const { id }= useParams() 
  const [data, setdata]= useState(()=> [])
  return (
    <>
        <Navbar {...props} />
        <div className="dskkaw" style={{width: "100%", top: 100, display: 'flex', justifyContent: "center", flexDirection: "column", position: "relative", alignItems: 'center', padding: "50px 100px"}}>
            <div className="oekeowa" style={{width: 650}}>
                <div style={{width: "100%", display: "flex", justifyContent: "center", alignItems: 'center', gap: 30, borderBottom: "1px solid #000"}}>
                    <div style={{position: "relative",}}>
                        <img src={props.avatar_user || "https://i.imgur.com/k9AlaAq.png"} alt="open" style={{width: 168, height: 168, borderRadius: "50%", objectFit: "cover"}} />
                        <div style={{position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", marginBottom: 5, cursor: "pointer", zIndex: 10}}>
                            <label>
                                <PhotoCameraIcon style={{cursor: "pointer", color: "#555"}} />
                                <input type="file" style={{width: 0, height: 0}} onChange={(e)=> avatar_user(e.target.files, props?._id, props.setuser)} />
                            </label>
                        </div>
                    </div>
                    <div style={{lineHeight: 3}}>
                        <div style={{fontSize: 32, fontWeight: 600}}>{props.username}</div>
                        <div><span style={{fontWeight: 600}}>{data?.length || "_"}</span> <span>posts</span></div>
                        <div style={{fontSize: 28}}>{props.fullname}</div>
                    </div>
                </div>
                <div className="dsewrkw" style={{width: "100%", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: 'center',}}>
                    <div style={{flex: "1 1 0", height: 50, display: "flex", justifyContent: "center", alignItems: 'center'}}>
                        <NavLink style={{width: "70%", display: 'flex', justifyContent: "center", alignItems: 'center', height: "100%", textDecoration: "none", color: "#000"}} to={"/user/"+id+"/my_recipes"} className={({ isActive }) => (isActive ? 'active-link-1' : 'link')}>
                            <div>
                                My recipes
                            </div>
                        </NavLink>
                    </div>
                    <div style={{flex: "1 1 0", height: 50, display: "flex", justifyContent: "center", alignItems: 'center'}}>
                        <NavLink style={{width: "70%", display: 'flex', justifyContent: "center", alignItems: 'center', height: "100%", textDecoration: "none", color: "#000"}} to={"/user/"+id+"/create_recipes"} className={({ isActive }) => (isActive ? 'active-link-1' : 'link')}>
                            <div>
                                CREATE RECIPE
                            </div>
                        </NavLink>
                    </div>
                    <div style={{flex: "1 1 0", height: 50, display: "flex", justifyContent: "center", alignItems: 'center'}}>
                        <NavLink style={{width: "70%", display: 'flex', justifyContent: "center", alignItems: 'center', height: "100%", textDecoration: "none", color: "#000"}} to={"/user/"+id+"/favourite"} className={({ isActive }) => (isActive ? 'active-link-1' : 'link')}>
                            <div>
                                Favourite
                            </div>
                        </NavLink>
                    </div>
                </div>
                <Routes>
                    <Route path="/" element={<Navigate to={"my_recipes"} />}></Route>
                    <Route index path="/my_recipes" element={<MyRecipes {...props} data={data} setdata={setdata} />}></Route>
                    <Route path="/create_recipes" element={<CreateRecipes {...props} />}></Route>
                    <Route path="/favourite" element={<FavouriteRecipe {...props} />}></Route>
                </Routes>
            </div>
        </div>
    </>
  )
}


export default SelfPage