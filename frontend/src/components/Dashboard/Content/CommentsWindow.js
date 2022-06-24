import { styled } from '@mui/material'
import Header from './Header'
import CommentsSection from './CommentsSection'
import CommentsFooter from './CommentsFooter'
import '../styles.css'
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
  return (
    <MainContainer>
        <Header title={chosenPost.title}/>
        <CommentsSection comments={chosenPost.comment}/>
        <CommentsFooter />
    </MainContainer>
  )
}

export default CommentsWindow