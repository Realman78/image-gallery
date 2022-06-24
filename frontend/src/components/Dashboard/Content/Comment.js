import React from 'react'
import { styled } from '@mui/material'
import './Comments.css'
import CommentContent from './CommentContent'
const MainContainer = styled('div')({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  marginBottom: '15px',
  paddingRight: '5px',
})
function Comment({ content, isMine }) {
  return (
    <MainContainer className='commentWrapper' style={{justifyContent: isMine ? 'flex-end' : 'flex-start'}}>
      <div className='imgWrapper'>
      {!isMine && <img alt='Profile picture' src='https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png' />}

      </div>
      <CommentContent  isMine={isMine} content={content}/>
    </MainContainer>
  )
}

export default Comment