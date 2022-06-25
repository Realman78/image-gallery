import React from 'react'
import {styled} from '@mui/material'
import './styles.css'
import ToolbarOptions from './Toolbar/ToolbarOptions'
import { useMediaQuery } from 'react-responsive'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripLines } from '@fortawesome/free-solid-svg-icons'
const MainContainer = styled('div')({
    width: '99%',
    height: '48px',
    //borderBottom: '1px solid black',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: "#fec210",
    position: "absolute",
    right: 0,
    top: 0,
    padding: "0 15px"
})

function Toolbar({setShowMenu}) {
  const isMobile = useMediaQuery({ query: '(max-width: 1000px)' });
  const handleOpenMenu = ()=>{
    setShowMenu(prevState=>{
      return !prevState
    })
    
  }
  return (
    <MainContainer style={{height: isMobile ? '10%' : '48px'}}>
        {isMobile && <button onClick={handleOpenMenu} className='hamButton' style={{marginLeft: isMobile ? '15px' : 0}}><FontAwesomeIcon icon={faGripLines}/></button>}
        <img style={{marginLeft: isMobile ? 0 : '15px'}} className='logo' src='./a-logo.jpg'/>
        {!isMobile && <ToolbarOptions />}
    </MainContainer>
  )
}

export default Toolbar