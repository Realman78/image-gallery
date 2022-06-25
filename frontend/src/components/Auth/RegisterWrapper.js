import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material'
import { validateRegisterForm } from '../../features/utils/validators'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { connect } from 'react-redux'
import { getActions } from '../../store/actions/authActions'
import RegisterForm from './RegisterForm'
import RegisterFooter from './RegisterFooter'
import { useMediaQuery } from 'react-responsive'

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

function RegisterWrapper({ register }) {
  const isMobile = useMediaQuery({ query: '(max-width: 1000px)' });

  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [repeatedPassword, setRepeatedPassword] = useState('')

  const [isFormValid, setIsFormValid] = useState(false)

  useEffect(() => {
    setIsFormValid(validateRegisterForm(username, password, repeatedPassword))
  }, [username, password, repeatedPassword, setIsFormValid])

  const handleRegister = async () => {
    const userDetails = {
      username,
      password,
    }
    const answer = await register(userDetails, navigate)
    if (answer.error) {
      console.log(answer.error)
      toast.error(answer.error.response?.data?.error)
      if (!answer.error.response?.data?.error) toast.error('Something went wrong. Try again later.')
    }
  }
  const handleEnter = (e) => {
    if (e.keyCode === 13 && isFormValid) {
      handleRegister()
    }
  }
  return (
    <MainContainer style={{ width: isMobile ? '90%' : '65%', marginLeft: isMobile ? '10%' : '35%' }}>
      <h1 style={{ marginBottom: 0 }}>Register</h1>
      <RegisterForm handleEnter={handleEnter} username={username} setUsername={setUsername} password={password} setPassword={setPassword} repeatedPassword={repeatedPassword} setRepeatedPassword={setRepeatedPassword} />
      <RegisterFooter isFormValid={isFormValid} handleRegister={handleRegister} />
    </MainContainer>
  )
}

const mapActionsToProps = dispatch => {
  return {
    ...getActions(dispatch)
  }
}

export default connect(null, mapActionsToProps)(RegisterWrapper)