import React from 'react'
import Input from './Input'


function LoginForm(props) {
  return (
    <>
        <Input value={props.username} setValue={props.setUsername} label="Username" type="text" placeholder="Type your username"/>
        <Input value={props.password} setValue={props.setPassword} label="Password" type="password" placeholder="Type your password"/>
    </>
  )
}

export default LoginForm