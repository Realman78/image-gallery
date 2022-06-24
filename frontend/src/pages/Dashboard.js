import React, { useEffect } from 'react'
import {styled} from '@mui/material'
import SideBar from '../components/Dashboard/Sidebar'
import { logout } from '../features/utils/auth'
import {connect} from 'react-redux'
import { getActions } from '../store/actions/authActions'
import { getPostActions } from '../store/actions/postActions'
import Content from '../components/Dashboard/Content'
import Toolbar from '../components/Dashboard/Toolbar'
import { connectSocket } from '../socketConnection'

const Wrapper = styled('div')({
  width: '100%',
  height: '100%',
  display: 'flex',
})
function Dashboard({setUserDetails, getAllPosts}) {
  useEffect(()=>{
    const userDetails = localStorage.getItem('user')
    if (!userDetails){
      logout()
    }else{
      setUserDetails(JSON.parse(userDetails))
      getAllPosts()
      connectSocket()
    }
  }, [])
  return <Wrapper>
    <Toolbar />
    <SideBar /> 
    <Content /> 
  </Wrapper>
}

const mapActionsToProps = dispatch =>{
  return {
    ...getActions(dispatch),
    ...getPostActions(dispatch)
  }
}

export default connect(null, mapActionsToProps)(Dashboard)