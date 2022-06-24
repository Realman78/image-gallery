import React, { useState } from 'react'
import { styled } from '@mui/material'
import {connect} from 'react-redux'
import MainDisplay from './Content/MainDisplay'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faX } from '@fortawesome/free-solid-svg-icons'
import './styles.css'
import CommentsWindow from './Content/CommentsWindow'
const MainContainer = styled('div')({
    width: '100%',
    height: 'calc(100%-48px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: "48px",
    overflow: 'hidden'
})

function Content({chosenPost}) {
  const [showComments, setShowComments] = useState(false)
  const toggleComments = ()=>{
    setShowComments(!showComments)
  }
  return (
    <MainContainer>
      {!chosenPost ? <h1>Welcome!</h1> : <MainDisplay image={chosenPost.image} description={chosenPost.description} />}
      {chosenPost && <button onClick={toggleComments} id='commentsButton'><FontAwesomeIcon style={{color: '#101010'}} icon={showComments ? faX : faComment} /></button>}
      {(chosenPost && showComments) && <CommentsWindow chosenPost={chosenPost} />}
    </MainContainer>
  )
}


const mapStoreStateToProps = ({post})=>{
  return {
    ...post
  }
}

export default connect(mapStoreStateToProps)(Content)