import React from 'react'
import { styled } from '@mui/system'
import ImageListItem from './ImageListItem'
import './ImageListItem.css'
import {connect} from 'react-redux'
import { useMediaQuery } from 'react-responsive'

const MainContainer = styled('div')({
  width: '90%',
  height: '100%',
  justifyContent: 'flex-start',
  flexDirection: 'column',
  display: 'flex',
  alignItems: 'flex-start',
  overflowY: 'scroll',
})

function ImageList({posts, handleCloseMenu}) {
  const isMobile = useMediaQuery({ query: '(max-width: 1000px)' });
  return (
    <MainContainer style={{height: isMobile ? '80vh' : '100%'}} className='imageList'>
      {posts.sort((a, b) => (a.id - b.id) ? -1 : 1).map(post=><ImageListItem handleCloseMenu={handleCloseMenu} key={post.id} id={post.id} image={post.image} title={post.title} description={post.description}/>)}
      
    </MainContainer>
  )
}

const mapStoreStateToProps = ({ post }) => {
  return {
      ...post
  }
}

export default connect(mapStoreStateToProps)(ImageList)