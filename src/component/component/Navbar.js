import React from 'react'
import {  NavLink } from 'react-router-dom'
import image from "../../assets/logo-01 1.png"
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { logout } from '../function/logout';


const Navbar = (props) => {
  return (
    <div className="rp_2" style={{background: "#fff"}}>
        <div className="ds_4">
            <div className="sk_5">
                <IconApp />
                <LinkTo scrollInto={props.scrollInto} />
            </div>
            {
                props?._id?.length> 0 ?
                <div style={{display: "flex", alignItems: "center", gap: 50}}>
                    <Link to={"/user/"+props._id}>
                        <div style={{width: 48, height: 48, borderRadius: "50%", overflow: "hidden"}}>
                            <img src={props.avatar_user || "https://i.imgur.com/k9AlaAq.png"} alt="open" style={{width: "100%", height: "100%", objectFit: "cover"}} />
                        </div>
                    </Link>
                    <div onClick={()=> logout()} style={{padding: "0 20px", height: 30, borderRadius: "15px", display: "flex", justifyContent: "center", alignItems: "center", color: "#fff", background: "#FF785A", cursor: "pointer"}}>
                        Logout
                    </div>
                </div>
                :
                    <div style={{width: 56, height: 30, display: "flex", justifyContent: 'center',alignItems: "center", borderRadius: 30, background: "#FFD25A", color: "#fff", cursor: "pointer"}}>
                    <Link style={{textDecoration: "none", color: "#fff"}} to="/login">
                        Login
                    </Link>
                </div>
            }
        </div>
    </div>
  )
}
export const NavBarForHome= (props)=> {
    return (
        <div className="rp_2" style={{border: "none", background: "#f0f0f0"}}>
            <div className="ds_4">
                <div className="sk_5">
                    <LinkTo scrollInto={props.scrollInto} />
                </div>
            <div>
                <div style={{display: "flex", flexDirection: "row", justifyContent: 'center',alignItems: 'center',gap: 16}}>
                    <div className='ks_3' style={{position: "relative", borderRadius: 15, overflow: "hidden"}}>
                        <input onChange={(e)=> props.setsearch_query(e.target.value)} type="text" style={{width: 325, height: 43, borderRadius: 15, padding: 10, background: "#fff", outline: "none"}} placeholder="Search for recipes" />
                        <Link to={"/search?query="+props.search_query}>
                            <div style={{position: "absolute", top: 0, height: 43, width: 43, right: 0, background: "#ffd25a", display: "flex", justifyContent: 'center',alignItems: "center", cursor: "pointer"}}>
                                <SearchIcon style={{color: "#fff"}} />
                            </div>
                        </Link>

                    </div>
                    {
                        props?._id?.length> 0 ?
                        <div style={{display: "flex", alignItems: "center", gap: 30}}>
                            <Link to={"/user/"+props._id}>
                                <div style={{width: 48, height: 48, borderRadius: "50%", overflow: "hidden"}}>
                                    <img src={props.avatar_user || "https://i.imgur.com/k9AlaAq.png"} alt="open" style={{width: "100%", height: "100%", objectFit: "cover"}} />
                                </div>
                            </Link>
                            <div onClick={()=> logout()} style={{padding: "0 20px", height: 30, borderRadius: "15px", display: "flex", justifyContent: "center", alignItems: "center", color: "#fff", background: "#FF785A", cursor: "pointer"}}>
                                Logout
                            </div>
                        </div>
                        :
                        <div style={{width: 56 ,height: 30, borderRadius: 30, color: "#fff", backgroundColor: "#FFD25A", display: "flex", justifyContent: 'center',alignItems: 'center', cursor: "pointer"}}>
                            <Link style={{color: "#fff", textDecoration: "none"}} to="/login">
                                Login
                            </Link>
                        </div>
                    }
                </div>
                <div>

                </div>
            </div>
        </div>
    </div>
    )
}
export const NavBarForSearch= (props)=> {
    return (
        <div className="rp_2" style={{border: "1px solid #f0f0f0", background: "#fff"}}>
            <div className="ds_4">
                <div className="sk_5">
                    <LinkTo scrollInto={props.scrollInto} />
                </div>
            <div>
                <div className='ks_3' style={{position: "relative", borderRadius: 15, overflow: "hidden"}}>
                    <input onChange={(e)=> props.setsearch_query(e.target.value)} type="text" style={{width: 325, height: 43, borderRadius: 15, padding: 10, background: "#fff", outline: "none"}} placeholder="Search for recipes" />
                    <Link to={"/search?query="+props.search_query}>
                        <div style={{position: "absolute", top: 0, height: 43, width: 43, right: 0, background: "#ffd25a", display: "flex", justifyContent: 'center',alignItems: "center", cursor: "pointer"}}>
                            <SearchIcon style={{color: "#fff"}} />
                        </div>
                    </Link>
                </div>
                <div>

                </div>
            </div>
        </div>
    </div>
    )
}

const IconApp= (props)=> {
    return (
        <div className="cm_2">
            <img src={image} alt="open" />
        </div>
    )
}
const LinkTo= (props)=> {
    return (
        <div className='kl_3'>
            <NavLink style={{textDecoration: "none"}} className={({ isActive }) => (isActive ? 'active-link' : 'link')} to={"/home"}>
                <div className='fk_4' style={{textTransform: "capitalize", color: "#000",}}>
                    Home
                </div>
            </NavLink>
            <NavLink onClick={
                (e)=> {
                    e.preventDefault()
                    props.scrollInto()
                }
            } style={{textDecoration: "none"}} className={({ isActive }) => (isActive ? 'active-link' : 'link')} to={"/categories"}>
                <div className='fk_4' style={{textTransform: "capitalize", color: "#000",}}>
                    Categories
                </div>
            </NavLink>
            <NavLink style={{textDecoration: "none"}} className={({ isActive }) => (isActive ? 'active-link' : 'link')} to={"/about"}>
                <div className='fk_4' style={{textTransform: "capitalize", color: "#000",}}>
                    About
                </div>
            </NavLink>
        </div>
    )
}

export default Navbar