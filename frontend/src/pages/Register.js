import React from 'react'
import { styled } from '@mui/material'
import ContentContainer from '../components/Auth/ContentContainer'

const MainContainer = styled('div')({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
})

const BackgroundImageContainer = styled('div')({
  width: '55%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  background: `url("https://images.unsplash.com/photo-1483232539664-d89822fb5d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGhvdG8lMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&w=1000&q=80")`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100%'
})

function Register() {
  return (
    <MainContainer>
      <ContentContainer />
      <BackgroundImageContainer />
    </MainContainer >
  )
}

export default Register