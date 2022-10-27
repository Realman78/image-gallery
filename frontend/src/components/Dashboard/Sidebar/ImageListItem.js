import React, { useEffect, useState } from 'react'
import { styled } from '@mui/system'
import './ImageListItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faHeart as faHeartFull } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from "@fortawesome/free-regular-svg-icons"
import { connect } from 'react-redux'
import { getPostActions } from '../../../store/actions/postActions'

const MainContainer = styled('div')({
    width: '100%',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: '30px'
})
function ImageListItem({ id, title, description, image, getPost, handleCloseMenu, likes, userDetails, likePost }) {
    const [isLiked, setIsLiked] = useState(false)
    const [_likes, setLikes] = useState(0)
    const reviewButtonHandler = () => {
        getPost(id)
        if (handleCloseMenu) handleCloseMenu()
    }
    const likeButtonHandler = async () => {
        const answer = await likePost({
            user_id: userDetails.id,
            id
        })
        if (answer.error) {
            alert('Something went wrong')
        }
        console.log(answer.response)
        setIsLiked(answer.response.data.isLiked)
        setLikes(answer.response.data.post.likes ? answer.response.data.post.likes.split(",").length : 0)
    }
    useEffect(() => {
        if (!likes) return
        setIsLiked(likes && likes.replaceAll("\"", "").split(",").includes(userDetails.id.toString()))
        setLikes(likes.split(",").length)
    }, [])
    return (
        <MainContainer>
            <div className={'listItemWrapper'}>
                <img src={image} />
                <div className={'titleWrapper'}>
                    <p>{title}</p>
                </div>
            </div>
            <div>
                <button onClick={reviewButtonHandler} className={'reviewButton'}>Review <FontAwesomeIcon icon={faArrowRight} /></button>
                <button className="likeButton" onClick={likeButtonHandler} style={{color: isLiked ? 'red' : 'black'}}><FontAwesomeIcon icon={isLiked ? faHeartFull : faHeart} /></button>
                <span>{_likes}</span>
            </div>
        </MainContainer>
    )
}

const mapActionsToProps = dispatch => {
    return {
        ...getPostActions(dispatch)
    }
}

const mapStoreStateToProps = ({ auth }) => {
    return {
        ...auth
    }
}

export default connect(mapStoreStateToProps, mapActionsToProps)(ImageListItem)