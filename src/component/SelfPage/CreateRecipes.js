import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { createrecipe } from '../function/createrecipe';
import { useNavigate } from "react-router-dom"

const CreateRecipes = (props) => {
  const [files, setfiles]= useState(()=> "")
  const [recipe, setrecipe]= useState(()=> ({
    title: "",
    serving: "",
    level: "",
    cooktime: "",
    ingredients: ""
  }))
  const [description, setdescription]= useState(()=> "")
  const [method, setmethod]= useState(()=> "")
  const [preview, setpreview]= useState(()=> "")
  const previewImage= (e)=> {
    setpreview(()=> URL.createObjectURL(e.target.files[0]))
  }
  const navigate= useNavigate()
  return (
    <div className="dskwe" style={{width: "100%", }}>
        <div className="kdeks" style={{width: "100%", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: 'center', gap: 50}}>
            <div style={{width: 339, height: 218, borderRadius: 45, position:"relative", border: "3px solid rgba(0, 0, 0, 0.5)", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", overflow: "hidden"}}>
                <div style={{width: 160, height: 160, position: 'relative'}}>
                    <label>
                        <input type="file" style={{width: 0, height: 0}} onChange={(e)=> {
                            setfiles(e.target.files)
                            previewImage(e)
                        }} />
                        <img style={{width: "100%", height: "100%", objectFit: "cover"}} src="https://res.cloudinary.com/cockbook/image/upload/v1654185525/single/upload_1_wmlwaz.png" alt="open" />
                    </label>
                </div>
                {
                    preview?.length>0 &&
                    <>
                        <img style={{width: "100%", height: "100%", position: "absolute", zIndex: 20, top: 0, left: 0, borderRadius: 30}} src={preview} alt="open" />
                        <div style={{width: 40, height: 40, borderRadius: "50%", zIndex: 20, position: "absolute", top: 0, right: 0, display: "flex", justifyContent: "center", alignItems: "center", marginRight: 16, marginTop: 8, backgroundColor: "#f2f0f5", cursor: "pointer"}} onClick={()=>{setpreview(()=> "")
                        setfiles(()=> "")
                    }}><CloseIcon /></div>
                    </>
                    
                }
                <div style={{width: 200, height: 36, display: "flex", justifyContent: 'center',alignItems: "center", color: "rgba(0, 0, 0, 0.3)", fontSize: 25}}>
                    Upload recipe photo
                </div>
            </div>
            <div style={{display: "flex", flexDirection: "column", justifyContent: 'center',alignItems: "center", gap: 20}}>
                <div style={{fontSize: 75, fontWeight: 700, }}>Title</div>
                <div>
                    <input onChange={(e)=> setrecipe(prev=> ({...prev, title: e.target.value}))} className="koweeqw" type="text" style={{width: "242px", textAlign: "center", borderWidth: "0 0 3px", borderColor: "#000"}} />
                </div>
            </div>
        </div>
        <br />
        <div className='flkjadsd' style={{width: "100%", display: "flex", flexDirection: "row", justifyContent: "center"}}>
            <div style={{flex: "1 1 0", display: "flex", flexDirection: "column",}}>
                <br />
                <div><span>Serving:</span> <input onChange={(e)=> setrecipe(prev=> ({...prev, serving: e.target.value}))} type="text" className='dsdsds' style={{ borderWidth: "0 0 3px", borderColor: "#000"}} placeholder="How many people?" /></div>
                <br />
                <br />
                <div style={{display: "flex", gap: 5}}><span>Level: </span><div style={{display: "flex", flexDirection: "column", }}>
                    <div style={{display: "flex", alignItems: "center", gap: 5}}>
                        <input type="radio" value="Beginner" name="level" onChange={(e)=> setrecipe(prev=> ({...prev, level: e.target.value}))}  />
                        <span>Beginner</span>
                    </div>
                    <div style={{display: "flex", alignItems: "center", gap: 5}}>
                        <input type="radio" value="Intermediate" name="level" onChange={(e)=> setrecipe(prev=> ({...prev, level: e.target.value}))} />    
                        <span>Intermediate</span>
                    </div>
                    <div style={{display: "flex", alignItems: "center", gap: 5}}>
                        <input type="radio" value="Gordon Ramsay" name="level" onChange={(e)=> setrecipe(prev=> ({...prev, level: e.target.value}))} />   
                        <span>Gordon Ramsay</span>     
                    </div>
                </div>
                </div>
                <br />
                <div className='djspekapw'>
                    <span>Cook time(minutes):</span> <input onChange={(e)=> setrecipe(prev=> ({...prev, cooktime: e.target.value}))} type="text" style={{width: 128, borderWidth: "0 0 3px", borderColor: "#000", outline: "none"}}/>
                </div>
                <br />
                <br />
                <div className="woekweoewe">
                    <span>Ingredients:</span><input onChange={(e)=> setrecipe(prev=> ({...prev, ingredients: e.target.value}))} type="text" placeholder="2eggs, 300ml vinegar" style={{width: 215, borderWidth: "0 0 3px", borderColor: "#000", outline: "none", color: "rgba(0, 0, 0)"}} />
                </div>
            </div>
            <div style={{flex: "1 1 0", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "end"}}>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <div>Description: </div>
                    <textarea onChange={(e)=> setdescription(e.target.value)} name="description" cols="30" rows="10" style={{width: 256, height: 124, padding: 5, resize: "none", outline: "1px solid #000"}}></textarea>
                </div>
                <br />
                <div style={{display: "flex", flexDirection: "column"}}>
                    <div>Method: </div>
                    <textarea onChange={(e)=> setmethod(e.target.value)} name="method" cols="30" rows="10" style={{width: 256, height: 124, padding: 5, resize: "none", outline: "1px solid #000"}}></textarea>
                </div>
            </div>
        </div>
        <div style={{width: "100%", display: "flex", alignItems: "center", justifyContent: "center", marginTop: 20}}>
            <div onClick={()=> createrecipe(files, recipe, description, method, props?._id, navigate)} className="dpsdfea" style={{width: 120, height: 40, borderRadius: 15, color: "#fff", background: '#FF785A', display: "flex", justifyContent: 'center',alignItems: "center", cursor: "pointer"}}>
                Create recipe
            </div>
        </div>
    </div>
  )
}

export default CreateRecipes