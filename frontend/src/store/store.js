import {composeWithDevTools} from 'redux-devtools-extension'
import {combineReducers, createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import authReducer from './reducers/authReducer'
import postReducer from './reducers/postReducer'
const rootReducer = combineReducers({
    auth: authReducer,
    post: postReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store