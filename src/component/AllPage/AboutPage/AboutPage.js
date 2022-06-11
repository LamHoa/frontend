import React from 'react'
import { useEffect } from 'react'
import Navbar from '../../component/Navbar'

const AboutPage = (props) => { 
  useEffect(()=> {
      document.body.style.overflow= "hidden"
      return ()=> document.body.style.overflow= "auto"
  })
  return (
    <>
      <Navbar {...props} />  
      <div className='mv_4'>
          <div className="ik_4">
              <img src="https://res.cloudinary.com/cockbook/image/upload/v1654158086/single/assorted-american-food-top-view-109748438_1_wwug6b.png" alt="open" />
          </div>
          <div className="tl_3">
            <Text value={"This is a Food Blog is a recipe & travel blog written by all people around the world. In its 7 years of existence it has covered such diverse subjects as mini beef wellingtons, driving through iceland’s ring road, and making pho in a pressure cooker"} />
            <Text value={"Interested in working with us? Occasionally we create sponsored posts for brands that are a good fit for I am a Food Blog. We’re also available for recipe development & photography. Send us a quick email for more info!"} />
          </div>
      </div>
    </>
  )
}

const Text= (props)=> {
  return (
    <div className="ds_7">
      {props.value}
    </div>
  )
}

export default AboutPage