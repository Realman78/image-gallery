import React from 'react'
import '../styles.css'
import { connect } from 'react-redux'
import {styled} from '@mui/material'
import Dropdown from './Dropdown'
const MainContainer = styled('div')({
    height: '100%',
    width: '15%',
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
})

function ToolbarOptions({userDetails}) {
    return (
        <MainContainer className='spacer'>
            <img className='profilePic' alt='Profile picture' src='https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png' />
            <p className='name'>{userDetails?.username}</p>
            <Dropdown />
        </MainContainer>
    )
}

const mapStoreStateToProps = ({ auth }) => {
    return {
        ...auth
    }
}

export default connect(mapStoreStateToProps)(ToolbarOptions)