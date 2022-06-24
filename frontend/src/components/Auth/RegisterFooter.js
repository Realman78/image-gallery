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

function RegisterFooter({handleRegister, isFormValid}) {
    const navigate = useNavigate()
    const handlePushToLoginPage = ()=>{
      navigate('/login')
    }
    return <MainContainer>
      <Tooltip title={!isFormValid ? 'Enter username, password shuold be at least 3 characters and should match repeated password' : 'Press to register!'}>
      <div>
          <CustomPrimaryButton label="Register" additionalStyles={{marginTop:'30px'}} disabled={!isFormValid} onClick={handleRegister}/>
      </div>
      </Tooltip>
      <RedirectInfo text='Already have an account?' redirectText='Log in!' additionalStyles={{marginTop: '5px'}} redirectHandler={handlePushToLoginPage}/>
    </MainContainer>
  }
export default RegisterFooter