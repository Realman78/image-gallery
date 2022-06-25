import * as api from '../../api'
export const postActions = {
    SET_CHOSEN_POST: 'POST.SET_CHOSEN_POST',
    SET_ALL_POSTS: 'POST.SET_ALL_POSTS',
}

export const getPostActions = dispatch => {
    return {
        setChosenPostDetails: (details) => dispatch(setChosenPostDetails(details)),
        getAllPosts: () => dispatch(getAllPosts()),
        getSearchTermPosts: (searchTerm) => dispatch(getSearchTermPosts(searchTerm)),
        getPost: (id) => dispatch(getPost(id)),
        addPost: (body) => dispatch(addPost(body)),
        addPostComment: (body) => dispatch(addPostComment(body)),
    }
}

export const setChosenPostDetails = (chosenPost) => {
    return {
        type: postActions.SET_CHOSEN_POST,
        chosenPost
    }
}
export const setAllPosts = (posts) => {
    return {
        type: postActions.SET_ALL_POSTS,
        posts
    }
}
export const getAllPosts = () => {
    return async dispatch => {
        const response = await api.getAllPosts()
        if (response.error) {
            return {error:response}
        } else {
            const posts = response.data           
            dispatch(setAllPosts(posts.reverse()))
            return {}
        }
    }
}

const getSearchTermPosts = (searchTerm) => {
    return async dispatch => {
        const response = await api.getSearchTermPosts(searchTerm)
        if (response.error) {
            return {error:response}
        } else {
            const posts = response.data      
            dispatch(setAllPosts(posts.reverse()))
            return {}
        }
    }
}

export const getPost = (id) => {
    return async dispatch => {
        const response = await api.getPost(id)
        if (response.error) {
            return {error:response}
        } else {
            const post = response.data[0]          
            dispatch(setChosenPostDetails(post))
            return {}
        }
    }
}

const addPost = body => {
    return async dispatch => {
        const response = await api.addPost(body)
        if (response.error) {
            return {error:response}
        } else {
            return {}
        }
    }
}

const addPostComment = (body) =>{
    return async dispatch => {
        const response = await api.addPostComment(body)
        console.log(response)
        if (response.error) {
            return {error:response}
        } else {
            return {}
        }
    }
}