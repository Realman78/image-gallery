import React from 'react'
import { styled } from '@mui/system'
import ImageListItem from './ImageListItem'
import './ImageListItem.css'
import {connect} from 'react-redux'

const MainContainer = styled('div')({
  width: '90%',
  height: '100%',
  justifyContent: 'flex-start',
  flexDirection: 'column',
  display: 'flex',
  alignItems: 'flex-start',
  overflowY: 'scroll',
})

function ImageList({posts}) {
  return (
    <MainContainer className='imageList'>
      {posts.map(post=><ImageListItem key={post.id} id={post.id} image={post.image} title={post.title} description={post.description}/>)}
      
    </MainContainer>
  )
}

const mapStoreStateToProps = ({ post }) => {
  return {
      ...post
  }
}

export default connect(mapStoreStateToProps)(ImageList)