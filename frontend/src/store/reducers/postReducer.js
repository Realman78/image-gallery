import { postActions } from "../actions/postActions"

const initialState = {
    posts: [],
    chosenPost: null,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case postActions.SET_ALL_POSTS:
            return {
                ...state,
                posts: action.posts
            }
        case postActions.SET_CHOSEN_POST:
            return {
                ...state,
                chosenPost: action.chosenPost,
            }
        default:
            return state
    }
}

export default reducer