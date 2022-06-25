import React from 'react'
import { styled } from '@mui/material'
import SearchInput from './Sidebar/SearchInput'
import ImageList from './Sidebar/ImageList'
import { useMediaQuery } from 'react-responsive'

const MainContainer = styled('div')({
    width: '22%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: "48px",
    paddingLeft: '48px',
    borderRight: '1px solid black'
})

function SideBar({toggleAddPostShowing, handleCloseMenu}) {
  const isMobile = useMediaQuery({ query: '(max-width: 1000px)' });
  return (
    <MainContainer style={{width: isMobile ? '100%' : '22%',paddingLeft: isMobile ? '2px' : '48px', marginTop: isMobile ? '2px' : '48px', overflowY: isMobile ? 'auto' : 'hidden'}}>
        
        <h1 style={{ margin: 0, marginTop: isMobile ? 0 : '5px'}}>Image Gallery</h1>
        <button onClick={toggleAddPostShowing} style={{marginBottom: '15px', cursor: 'pointer', fontSize: '32px', background: 'gray', color: 'white', borderRadius: isMobile ? 0 : '50%', border: 'none', width: isMobile ? '150px' : '48px', height: isMobile ? '50px' : '48px'}}>+</button>
        <SearchInput />
        <ImageList handleCloseMenu={handleCloseMenu}/>
    </MainContainer>
  )
}

export default SideBar