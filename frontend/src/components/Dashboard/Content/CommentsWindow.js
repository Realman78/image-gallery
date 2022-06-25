import { styled } from '@mui/material'
import Header from './Header'
import CommentsSection from './CommentsSection'
import CommentsFooter from './CommentsFooter'
import '../styles.css'
import { useMediaQuery } from 'react-responsive'
const MainContainer = styled('div')({
    position:'fixed',
    right: '25px',
    bottom: '80px',
    width: '330px',
    height: '550px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    background: 'white',
    borderRadius: '4px',
    boxShadow: '4px 4px 5px gray'
})
function CommentsWindow({chosenPost}) {
  const isMobile = useMediaQuery({ query: '(max-width: 1000px)' });
  return (
    <MainContainer style={{height: isMobile ? '81%' : '550px', width: isMobile ? '100%' : '330px', right: isMobile ? 0 : '25px'}}>
        <Header title={chosenPost.title}/>
        <CommentsSection comments={chosenPost.comment}/>
        <CommentsFooter />
    </MainContainer>
  )
}

export default CommentsWindow