import React from 'react'
import { styled } from '@mui/material'
const MainContainer = styled('div')({
  width: '95%',
  height: '10%',
  display: 'flex',
  alignItems: 'center',
  paddingLeft: '5%',
  background: '#fec210'
})
function Header({title}) {
  return (
    <MainContainer>{title}</MainContainer>
  )
}

export default Header