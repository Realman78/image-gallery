import React from 'react'
import { styled } from '@mui/material'
import './Comments.css'

const MainContainer = styled('div')({
  padding: '5px',
  maxWidth: '80%',
  borderRadius: '4px',
  wordBreak:'break-all',
})
function CommentContent({content, isMine}) {
  return (
    <MainContainer className={isMine ? 'mine' : 'others'}>{content}</MainContainer>
  )
}

export default CommentContent