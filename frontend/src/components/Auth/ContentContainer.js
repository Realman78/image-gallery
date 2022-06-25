import React from 'react'
import { styled } from '@mui/material'
import LoginWrapper from './LoginWrapper'
import RegisterWrapper from './RegisterWrapper'
import { useMediaQuery } from 'react-responsive'

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
    const isMobile = useMediaQuery({ query: '(max-width: 1000px)' });
    return (
        <MainContainer style={{width: isMobile ? '90%' : '45%'}}>
            <Banner>
                <img src='./agilno-logo.png' width="200px" />
            </Banner>
            {window.location.href.includes('login') ? <LoginWrapper /> : <RegisterWrapper />}
        </MainContainer>
    )
}

export default ContentContainer