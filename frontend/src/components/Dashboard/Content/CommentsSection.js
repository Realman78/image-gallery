import React, { useEffect, useRef, useState } from 'react'
import { styled } from '@mui/material'
import Comment from './Comment'
import {connect} from 'react-redux'
import './Comments.css'
const MainContainer = styled('div')({
  width: '96%',
  height: '80%',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  flexDirection: 'column',
  marginLeft: '2%',
  marginTop: '2%',
  padding: 0,
  overflowY: 'auto'
})

function CommentsSection({comments, userDetails, chosenPost}) {
  const mainContainer = useRef()
  const imageRef = useRef()
  const [distanceFromTop, setDistanceFromTop] = useState(0)
  const scrollHandler = ()=>{
    setDistanceFromTop(mainContainer.current.scrollTop)
  }
  useEffect(()=>{
    mainContainer.current.scrollTop = mainContainer.current.scrollHeight;
  }, [mainContainer, chosenPost])
  return (
    <MainContainer ref={mainContainer} className={'commentsList'} onScroll={scrollHandler}>
      <img ref={imageRef} src={chosenPost.image} className={'firstPic'} style={{width: 330 - distanceFromTop}}/>
      {comments.map(comment =>{
      return <Comment key={comment.id} id={comment.id} isMine={comment.user_id == userDetails.id} content={comment.content}/>
      })}
    </MainContainer>
  )
}

const mapStoreStateToProps = ({ auth, post }) => {
  return {
      ...auth,
      ...post
  }
}

export default connect(mapStoreStateToProps)(CommentsSection)