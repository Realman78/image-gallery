import React, { useState } from 'react'
import { styled } from '@mui/material'
import './Comments.css'
import CommentActions from './CommentActions'
import Modal from '../../UI/Modal'
import { connect } from 'react-redux'
import { getPostActions } from '../../../store/actions/postActions'
const MainContainer = styled('div')({
  padding: '5px',
  maxWidth: '80%',
  borderRadius: '4px',
  wordBreak: 'break-all',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative'
})
function CommentContent({ content, isMine, id, userDetails, editPostComment }) {
  const [showEditComment, setShowEditComment] = useState(false)
  const [showCommentActions, setShowCommentActions] = useState(false)

  const [newValue, setNewValue] = useState('')
  const toggleEditShowing = () => {
    setShowEditComment(!showEditComment)
  }
  const inputHandler = (e) => {
    setNewValue(e.target.value)
  }
  const handleSave = async (e) => {
    if (newValue.length < 1) return
    const answer = await editPostComment({
      user_id: userDetails.id,
      content: newValue,
      id
    })
    if (!answer.error) {
      toggleEditShowing()
    }
  }
  const handleHover = () => {
    setShowCommentActions(true)
  }
  const handleExit = () => {
    setShowCommentActions(false)
  }
  return (
    <MainContainer className={isMine ? 'mine' : 'others'} onMouseEnter={handleHover} onMouseLeave={handleExit}>
      <Modal handleClose={toggleEditShowing} show={showEditComment}>
        <textarea onChange={inputHandler} style={{ width: '90%', height: '100px' }} placeholder='New comment content...'></textarea>
        <button onClick={handleSave}>Save</button>
      </Modal>
      <p className='message' style={{paddingBottom: showCommentActions && isMine ? '10px' : 0}}>{content}</p>
      {isMine && <CommentActions show={showCommentActions} commentContent={newValue} toggleEditShowing={toggleEditShowing} id={id} />}
    </MainContainer>
  )
}

const mapActionsToProps = dispatch => {
  return {
    ...getPostActions(dispatch)
  }
}
const mapStoreStateToProps = ({ auth }) => {
  return {
    ...auth,
  }
}
export default connect(mapStoreStateToProps, mapActionsToProps)(CommentContent)