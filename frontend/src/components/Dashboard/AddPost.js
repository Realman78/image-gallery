import React, { useRef, useState } from 'react'
import { styled } from '@mui/material'
import {connect} from 'react-redux'
import { getPostActions } from '../../store/actions/postActions'
const Wrapper = styled('div')({
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    zIndex: 1100
})
function AddPost({addPost, toggleAddPostShowing, getAllPosts, userDetails}) {

    const [title, setTitle] = useState('')
    const [image, setImage] = useState(null)
    const [description, setDescription] = useState('')

    const handleTitleChange = (e)=>{
        setTitle(e.target.value)
    }
    const handleDescriptionChange = (e)=>{
        setDescription(e.target.value)
    }

    const handleFileChoosing = e => {
        const reader = new FileReader();
        reader.addEventListener("load", async () => {
            const uploaded_image = reader.result;
            setImage(uploaded_image)
        });
        reader.readAsDataURL(e.target.files[0]);
    }
    const handleUpload = async ()=>{
        console.log({
            image,
            title,
            description,
            user_id: JSON.parse(localStorage.getItem('user')).id
        })
        const answer = await addPost({
            image,
            title,
            description,
            user_id: userDetails.id
        })
            if (!answer.error){
                setTitle('')
                setDescription('')
                getAllPosts()
                toggleAddPostShowing()
            }
    }
    return (
        <Wrapper>
            <input onChange={handleFileChoosing} type="file" name="image" id="imageUpload" accept="image/jpeg, image/png, image/jpg" />
            <input type="text" placeholder='title' id='titleInput' value={title} onChange={handleTitleChange}/>
            <input type="text" placeholder='description' id='descriptionInput' value={description} onChange={handleDescriptionChange}/>
            <button onClick={handleUpload}>Upload</button>
        </Wrapper>
    )
}

const mapActionsToProps = dispatch =>{
    return {
      ...getPostActions(dispatch)
    }
  }
  const mapStoreStateToProps = ({ auth }) => {
    return {
        ...auth
    }
}
  export default connect(mapStoreStateToProps, mapActionsToProps)(AddPost)