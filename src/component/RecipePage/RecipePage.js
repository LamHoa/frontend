import React, { useEffect, useState } from 'react'
import Navbar from '../component/Navbar'
import { useParams } from 'react-router-dom';
import { detailrecipe } from '../function/detailrecipe';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { unlike } from '../function/unlike';
import { like_ } from '../function/like';

const RecipePage = (props) => {
  const { id }= useParams()
  const [data, setdata]= useState(()=> [])
  const [like, setlike]= useState(()=> false)
  useEffect(()=> {
    detailrecipe(id, setdata)
  }, [id, like, props.like])
  return (
    <>
        <Navbar {...props} />
        <div className="asasak" style={{width: "100%", position: "relative", top: 100, display: "flex", justifyContent: 'center', flexDirection: "column", alignItems: 'center'}}>
            <div className="digfsdgsf" style={{maxWidth: 1024, width: "100%", padding: "100px 0", display: "flex", justifyContent: 'center',alignItems: "center", gap: 30, borderBottom: "1px solid rgba(0, 0, 0, 0.15)"}}>
                <div style={{flex: "1 1 0", }}>
                    <div className='kdosfg' style={{width: 484, height: 386, boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px"}}>
                        <img src={data?.photo} alt="open" style={{width: "100%", height: "100%", objectFit: "cover"}} />
                    </div>
                </div>      
                <div style={{flex: "1 1 0"}}>
                    <div style={{fontSize: 48, fontWeight: 600,}}>{data?.title}</div>
                    <br />
                    <br />
                    <div style={{fontSize: 20}}>
                        {data?.description}
                    </div>
                    <br />
                    <div>
                        Level: <span style={{textTransform: "capitalize"}}>{data?.level}</span>
                    </div>
                    <br />
                    <div style={{width: "100%", display: "flex", justifyContent: 'space-between',alignItems: "center"}}>
                        <div style={{flex: "1 1 0", display: "flex", justifyContent: 'center',alignItems: "center", gap: 10}}>
                            {
                                props.favourite_recipe?.includes(data?._id) ?
                                <>
                                    <FavoriteIcon style={{width: 60, height: 60, fill: "pink", cursor: "pointer"}} onClick={()=> {
                                        unlike(props._id, props.favourite_recipe, data?._id)
                                        setlike(prev=> !prev)
                                        props.setlike(prev=> !prev)
                                    }} />
                                    <div style={{fontSize: 40, fontWeight: 400}}>Liked</div>
                                </>
                                :
                                <>
                                    <FavoriteIcon style={{width: 60, height: 60, cursor: "pointer"}}  onClick={()=> {
                                        like_(props._id, props.favourite_recipe, data?._id)
                                        setlike(prev=> !prev)
                                        props.setlike(prev=> !prev)
                                    }}/>
                                    <div style={{fontSize: 40, fontWeight: 400}}>Like</div>
                                </>
                            }
                        </div>
                        <div style={{flex: "1 1 0", display: "flex", justifyContent: 'center',alignItems: "center", gap: 5, flexDirection: "column"}}>
                            <div style={{fontSize: 80}}>{data?.serving}</div>
                            <div style={{fontSize: 20, textTransform: "uppercase"}}>
                                Serving
                            </div>
                        </div>
                        <div style={{flex: "1 1 0", display: "flex", justifyContent: 'center',alignItems: "center", gap: 5, flexDirection: "column"}}>
                            <div style={{fontSize: 80}}>{data?.cooktime}</div>
                            <div style={{fontSize: 20, textTransform: "uppercase"}}>
                                Minutes
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='dgrgfrgre' style={{maxWidth: 1024, width: "100%", padding: "40px", display: "flex", justifyContent: 'center',alignItems: "center", gap: 30, flexDirection: "column"}}>
                <div style={{fontSize: 35, fontWeight: 600, width: "100%"}}>Ingredients</div>
                <div style={{width: "100%"}}>
                    {
                        data?.ingredients?.split("\n").map((item, key)=> <div key={key} style={{fontSize: 20, }} className="dskwqwqeqa" >{item}</div>)
                    }
                </div>
                <br />
                <div style={{fontSize: 35, fontWeight: 600, width: "100%"}}>Method  </div>
                    <div style={{width: "100%"}}>
                        {
                            data?.method?.split("\n").map((item, key)=> <div key={key} style={{fontSize: 20, }} >{item}</div>)
                        }
                    </div>
            </div>
        </div>
    </>
  )
}

export default RecipePage