import React from 'react'
import { styled } from '@mui/material'
import './MainDisplay.css'
const MainContainer = styled('div')({
    width: '80%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    overflowY: 'auto',
    marginTop: '2%'
})

function MainDisplay({image, description}) {
  return (
    <MainContainer className={'display'}>
        <img src={image} className={'displayImage'}/>
        <p className={'imageDescription'}>{description}</p>
    </MainContainer>
  )
}

export default MainDisplay