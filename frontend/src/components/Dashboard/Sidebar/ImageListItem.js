import React from 'react'
import { styled } from '@mui/system'
import './ImageListItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import {connect} from 'react-redux'
import { getPostActions } from '../../../store/actions/postActions'

const MainContainer = styled('div')({
    width: '100%',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom:'30px'
})
function ImageListItem({id, title, description, image, getPost}) {
    const reviewButtonHandler = ()=>{
        getPost(id)
    }
    return (
        <MainContainer>
            <div className={'listItemWrapper'}>
                <img src={image} />
                <div className={'titleWrapper'}>
                    <p>{title}</p>
                </div>
            </div>
            <button onClick={reviewButtonHandler} className={'reviewButton'}>Review <FontAwesomeIcon icon={faArrowRight}/></button>
        </MainContainer>
    )
}

const mapActionsToProps = dispatch =>{
    return {
      ...getPostActions(dispatch)
    }
  }
  
  export default connect(null, mapActionsToProps)(ImageListItem)