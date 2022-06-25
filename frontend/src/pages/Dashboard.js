import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material'
import SideBar from '../components/Dashboard/Sidebar'
import { logout } from '../features/utils/auth'
import { connect } from 'react-redux'
import { getActions } from '../store/actions/authActions'
import { getPostActions } from '../store/actions/postActions'
import Content from '../components/Dashboard/Content'
import Toolbar from '../components/Dashboard/Toolbar'
import { connectSocket } from '../socketConnection'
import { useMediaQuery } from 'react-responsive'
import './mobHelper.css'
import Modal from '../components/UI/Modal'
import AddPost from '../components/Dashboard/AddPost'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
const Wrapper = styled('div')({
  width: '100%',
  height: '100%',
  display: 'flex',
})
function Dashboard({ setUserDetails, getAllPosts }) {

  const [addPostShowing, setAddPostShowing] = useState(false)
  const isMobile = useMediaQuery({ query: '(max-width: 1000px)' });
  const [showMenu, setShowMenu] = useState(false)
  const handleCloseMenu = ()=>{
    setShowMenu(false)
  }

  const toggleAddPostShowing = ()=>{
    setAddPostShowing(!addPostShowing)
    if (isMobile) handleCloseMenu()
  }

  useEffect(() => {
    const userDetails = localStorage.getItem('user')
    if (!userDetails) {
      logout()
    } else {
      setUserDetails(JSON.parse(userDetails))
      getAllPosts()
      connectSocket()
    }
  }, [])
  return <>
    <Wrapper>
      <Modal handleClose={toggleAddPostShowing} show={addPostShowing}>
        <AddPost toggleAddPostShowing={toggleAddPostShowing} />
      </Modal>
      {(showMenu && isMobile) && (
        <div className='menu'>
          <button className='closeButton' onClick={handleCloseMenu}><FontAwesomeIcon icon={faArrowLeft}/></button>
          <SideBar handleCloseMenu={handleCloseMenu} toggleAddPostShowing={toggleAddPostShowing} />
        </div>
      )}
      <Toolbar setShowMenu={setShowMenu} />
      {!isMobile && <SideBar toggleAddPostShowing={toggleAddPostShowing}/>}
      <Content />
    </Wrapper>
  </>

}

const mapActionsToProps = dispatch => {
  return {
    ...getActions(dispatch),
    ...getPostActions(dispatch)
  }
}

export default connect(null, mapActionsToProps)(Dashboard)