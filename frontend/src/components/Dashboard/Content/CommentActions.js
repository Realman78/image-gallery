import React from 'react'
import { styled } from '@mui/material'
import './Comments.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
import { getPostActions } from '../../../store/actions/postActions'

const MainContainer = styled('div')({
    width: '90%',
    display: 'flex',
    justifyContent: 'flex-start'
})
function CommentActions({ toggleEditShowing, id, deleteComment, userDetails }) {
    const editHandler = () => {
        toggleEditShowing()
    }
    const deleteHandler = async ()=>{
        const answer = await deleteComment({
            user_id: userDetails.id,
            id
          })
          if (!answer.error) {
            alert('Deleted comment')
          }
    }

    return (
        <MainContainer>
            <button onClick={editHandler} className='actionButton btnCyanHover'><FontAwesomeIcon icon={faPen} /></button>
            <button onClick={deleteHandler} className='actionButton btnRedHover'><FontAwesomeIcon icon={faTrash} /></button>
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
    ...auth
  }
}
export default connect(mapStoreStateToProps, mapActionsToProps)(CommentActions)