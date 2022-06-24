import React from 'react'
import {styled} from '@mui/material'
import './styles.css'
import ToolbarOptions from './Toolbar/ToolbarOptions'
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

function Toolbar() {
  return (
    <MainContainer>
        <img className='logo' src='./a-logo.jpg'/>
        <ToolbarOptions />
    </MainContainer>
  )
}

export default Toolbar