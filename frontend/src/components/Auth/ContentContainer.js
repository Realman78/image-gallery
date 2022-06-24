import React from 'react'
import { styled } from '@mui/material'
import LoginWrapper from './LoginWrapper'
import RegisterWrapper from './RegisterWrapper'

const MainContainer = styled('div')({
    width: '45%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
})

const Banner = styled('div')({
    width: '100%',
    height: '10%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10%',
    background: "#fec210"
})


function ContentContainer() {
    return (
        <MainContainer>
            <Banner>
                <img src='./agilno-logo.png' width="200px" />
            </Banner>
            {window.location.href.includes('login') ? <LoginWrapper /> : <RegisterWrapper />}
        </MainContainer>
    )
}

export default ContentContainer