import React, { useState } from 'react'
import { memo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../function/login'
import { signup } from '../function/signup'
import SymbolApp from '../represent/SymbolApp'

const LoginPage = (props) => {
  const [emailOrtelephone, setemailOrtelephone]= useState(()=> "")
  const [password, setpassword]= useState(()=> "")
  const [disableButton, setDisableButton]= useState(()=> true)
  const [loginFailed, setLoginFailed]= useState(()=> false)
    const simpleValidate= ()=> {
    if(emailOrtelephone.trim() !== "" && password.trim() !== "") {
      return setDisableButton(()=> false)
    } 
    else {
      return setDisableButton(()=> true)
    }
  }
  return (
    <div className="ps_1">
      <div className="al_5">
        <SymbolApp />
        <TemplateInput simpleValidate={simpleValidate} type={"text"} placeholder={"Email or telephone number"} value={emailOrtelephone} setvalue={setemailOrtelephone} />
        <TemplateInput simpleValidate={simpleValidate} type={"password"} placeholder={"Password"} value={password} setvalue={setpassword} /> 
        {
          loginFailed=== true && <span style={{color: "red", fontSize: 16}}>Account or password is incorrect. try again</span>
        }
        <br />
        <TemplateButton2 disableButton={disableButton} title={"Log in"} emailOrtelephone={emailOrtelephone} password={password}setLoginFailed={setLoginFailed}  />
        <br />
        <SeparateLine />
        <br />
        <ToggleTemplate lec={"Don't have an account?"} toggle={"Sign up"} />
      </div>
    </div>
  )
}
export const TemplateInput= (props)=> {
  return (
    <div className="ds_4"> 
      <input onChange={(e)=> {
        props.simpleValidate()
        props.setvalue(e.target.value)
      }} type={props.type} value={props.value} placeholder={props.placeholder} required />
    </div>
  )
}
export const TemplateButton= (props)=> {
  const navigate= useNavigate()
  return (
    <div className='ld_2' onClick={()=> signup(props.emailOrtelephone, props.fullname, props.username, props.password, navigate)}>
      <button disabled={props.disableButton} className="am_4" style={{border: "none", opacity: props.disableButton=== true ? 0.5 : 1, cursor: props.disableButton=== true ? "context-menu" : "pointer"}}> 
        {props.title}
      </button>
    </div>
  )
}

export const TemplateButton2= (props)=> {
  const navigate= useNavigate()
  return (
    <div className='ld_2' onClick={()=> login(props.emailOrtelephone, props.password, navigate, props.setLoginFailed)}>
      <button disabled={props.disableButton} className="am_4" style={{border: "none", opacity: props.disableButton=== true ? 0.5 : 1, cursor: props.disableButton=== true ? "context-menu" : "pointer"}}> 
        {props.title}
      </button>
    </div>
  )
}
export const SeparateLine= (props)=> {
  return (
    <div className='ds_5'> 

    </div>
  )
}
export const ToggleTemplate= (props)=> {
  return (
    <div className="wo_1">
      <div className="rw_2">
        {props.lec}
      </div>
      <Link style={{textDecoration: "none"}} to={"/"+ props.toggle.toLowerCase().replaceAll(" ", "")}>
        <div className='am_3'>
          {props.toggle}
        </div>
      </Link>
    </div>
  )
}

export default memo(LoginPage)