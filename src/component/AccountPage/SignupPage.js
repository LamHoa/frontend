import React, { useState } from 'react'
import { memo } from 'react'
import SymbolApp from '../represent/SymbolApp'
import { SeparateLine, TemplateButton, TemplateInput, ToggleTemplate } from './LoginPage'

const SignupPage = (props) => {
  const [emailOrtelephone, setemailOrtelephone]= useState(()=> "")
  const [fullname, setfullname]= useState(()=> "")
  const [username, setusername]= useState(()=> "")
  const [password, setpassword]= useState(()=> "")
  const [disableButton, setDisableButton]= useState(()=> true)
  const simpleValidate= ()=> {
    if(emailOrtelephone.trim() !== "" && fullname.trim() !== "" && username.trim() !== "" && password.trim() !== "") {
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
        <TemplateInput simpleValidate={simpleValidate} type={"text"} placeholder={"Full name"} value={fullname} setvalue={setfullname} />
        <TemplateInput simpleValidate={simpleValidate} type={"text"} placeholder={"User name"} value={username} setvalue={setusername} />
        <TemplateInput simpleValidate={simpleValidate} type={"password"} placeholder={"Password"} value={password} setvalue={setpassword} /> 
        
        <br />
        <TemplateButton disableButton={disableButton} title={"Sign up"} emailOrtelephone={emailOrtelephone} fullname={fullname} username={username} password={password} />
        <br />
        <SeparateLine />
        <br />
        <ToggleTemplate lec={"Have an account?"} toggle={"Log in"} />
      </div>
    </div>
  )
}

export default memo(SignupPage)