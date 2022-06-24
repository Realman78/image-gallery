import React from 'react'
import Input from './Input'


function RegisterForm(props) {
  return (
    <>
        <Input value={props.username} setValue={props.setUsername} label="Username" type="text" placeholder="Choose your username"/>
        <Input value={props.password} setValue={props.setPassword} label="Password" type="password" placeholder="Choose your password"/>
        <Input value={props.repeatedPassword} setValue={props.setRepeatedPassword} label="Password" type="password" placeholder="Repeat your password"/>
    </>
  )
}

export default RegisterForm