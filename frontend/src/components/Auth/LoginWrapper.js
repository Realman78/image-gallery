import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material'
import LoginForm from './LoginForm'
import { validateLoginForm } from '../../features/utils/validators'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import LoginFooter from './LoginFooter'
import {connect} from 'react-redux'
import {getActions} from '../../store/actions/authActions'

const MainContainer = styled('div')({
  width: '65%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  marginLeft: '35%',
  padding: 0,
  marginBottom: 0
})

function LoginWrapper({login}) {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [isFormValid, setIsFormValid] = useState(false)

  useEffect(() => {
    setIsFormValid(validateLoginForm(username, password))
  }, [username, password, setIsFormValid])

  const handleLogin = async () => {
    const userDetails = {
      username,
      password,
    }
    const answer = await login(userDetails, navigate)
    if (answer.error) {
      toast.error(answer.error.exception?.code === "ECONNABORTED" ? "Something went wrong. Retry Connection" : "Credentials incorrect")
    }
  }
  return (
    <MainContainer>
      <h1 style={{marginBottom: 0}}>Log In</h1>
      <LoginForm  username={username} setUsername={setUsername} password={password} setPassword={setPassword}/>
      <LoginFooter isFormValid={isFormValid} handleLogin={handleLogin}/>
    </MainContainer>
  )
}

const mapActionsToProps = dispatch=>{
  return {
    ...getActions(dispatch)
  }
}

export default connect(null, mapActionsToProps)(LoginWrapper)