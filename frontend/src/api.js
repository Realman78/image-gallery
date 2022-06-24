import axios from 'axios'
import { logout } from './features/utils/auth'

const apiClient = axios.create({
    baseURL: 'http://localhost:5000',
    timeout: 2500
})

// apiClient.interceptors.request.use(config => {
//     const userDetails = localStorage.getItem('user')

//     if (userDetails) {
//         config.data.user_id = JSON.parse(userDetails).id
//     }

//     return config
// }, err => {
//     return Promise.reject(err)
// })

export const login = async (data) => {
    try {
        return await apiClient.post('/api/auth/login', data)
    } catch (exception) {
        return {
            error: true,
            exception
        }
    }
}
export const register = async (data) => {
    try {
        return await apiClient.post('/api/auth/register', data)
    } catch (exception) {
        return {
            error: true,
            exception
        }
    }
}
export const getAllPosts = async ()=>{
    try {
        return await apiClient.get('/api/posts/getall')
    } catch (exception) {
        return {
            error: true,
            exception
        }
    }
}
export const getSearchTermPosts = async (searchTerm)=>{
    try {
        return await apiClient.get('/api/posts/search?search='+searchTerm)
    } catch (exception) {
        return {
            error: true,
            exception
        }
    }
}
export const getPost = async (id)=>{
    try {
        return await apiClient.get('/api/comments/get/'+id)
    } catch (exception) {
        return {
            error: true,
            exception
        }
    }
}