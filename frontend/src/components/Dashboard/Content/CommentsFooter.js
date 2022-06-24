import React from 'react'
import { styled } from '@mui/material'
const MainContainer = styled('div')({
  width: '90%',
  height: '10%',
  display: 'flex',
  alignItems: 'center',
  paddingLeft: '5%',
  paddingRight: '5%',
  borderTop: '1px solid gray'
})
function CommentsFooter() {
  return (
    <MainContainer>CommentsFooter</MainContainer>
  )
}

export default CommentsFooter