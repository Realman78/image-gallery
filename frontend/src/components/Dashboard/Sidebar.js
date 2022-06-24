import React from 'react'
import { styled } from '@mui/material'
import SearchInput from './Sidebar/SearchInput'
import ImageList from './Sidebar/ImageList'

const MainContainer = styled('div')({
    width: '22%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: "48px",
    paddingLeft: '48px',
    borderRight: '1px solid black'
})

function SideBar() {
  return (
    <MainContainer>
        <h1>Image Gallery</h1>
        <SearchInput />
        <ImageList />
    </MainContainer>
  )
}

export default SideBar