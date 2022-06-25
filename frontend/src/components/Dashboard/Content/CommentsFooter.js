import React, { useState } from 'react'
import { styled } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import './CommentsFooter.css'
import { connect } from 'react-redux'
import { getPostActions } from '../../../store/actions/postActions'
import { useMediaQuery } from 'react-responsive'
const MainContainer = styled('div')({
  width: '100%',
  height: '10%',
  display: 'flex',
  justifyContent: 'flex-start',
  borderTop: '1px solid gray',
  paddingLeft: '2px'
})
function CommentsFooter({addPostComment, userDetails, chosenPost}) {
  const isMobile = useMediaQuery({ query: '(max-width: 1000px)' });
  const [commentContent, setCommentContent] = useState('')
  const handleInputChange = e => {
    setCommentContent(e.target.value)
  }
  const handleCommentPost = async () => {
    if (commentContent.length < 1) return
    const answer = await addPostComment({
      user_id: userDetails.id,
      post_id: chosenPost.id,
      content: commentContent
    })
    if (!answer.error) {
      setCommentContent('')
    }
  }
  const handleEnter = (e)=>{
    if (e.keyCode === 13){
      handleCommentPost()
    }
  }
  return (
    <MainContainer>
      <input className='commentInput' placeholder='Leave a comment...' type='text' value={commentContent} onChange={handleInputChange} onKeyDown={handleEnter}/>
      <button style={{fontSize: isMobile ? '28px' : '20px'}} onClick={handleCommentPost} className='sendButton'><FontAwesomeIcon icon={faPaperPlane} /></button>
    </MainContainer>
  )
}

const mapActionsToProps = dispatch =>{
  return {
    ...getPostActions(dispatch)
  }
}
const mapStoreStateToProps = ({ auth, post }) => {
  return {
      ...auth,
      ...post
  }
}
export default connect(mapStoreStateToProps, mapActionsToProps)(CommentsFooter)