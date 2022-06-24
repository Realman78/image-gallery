import React from 'react'
import CustomPrimaryButton from './CustomPrimaryButton'
import RedirectInfo from './RedirectInfo'
import {useNavigate} from 'react-router-dom'
import {Tooltip, styled} from '@mui/material'

const MainContainer = styled('div')({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 0,
    margin: 0
  })

function LoginFooter({handleLogin, isFormValid}) {
    const navigate = useNavigate()
    const handlePushToRegisterPage = ()=>{
      navigate('/register')
    }
    return <MainContainer>
      <Tooltip title={!isFormValid ? 'Enter correct username and password shuold be at least 3 characters' : 'Press to log in!'}>
      <div>
          <CustomPrimaryButton label="Log in" additionalStyles={{marginTop:'30px'}} disabled={!isFormValid} onClick={handleLogin}/>
      </div>
      </Tooltip>
      <RedirectInfo text='Need an account?' redirectText='Create an account' additionalStyles={{marginTop: '5px'}} redirectHandler={handlePushToRegisterPage}/>
    </MainContainer>
  }
export default LoginFooter