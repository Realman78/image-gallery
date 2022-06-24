import io from 'socket.io-client'

let socket = null

export const connectSocket = () => {
    socket = io('http://localhost:5000')

    socket.on('connect', () => {
        console.log('Connected with socket server. ID: ' + socket.id)
    })

    socket.on('direct-chat-history', data => {
        console.log('ok')
    })
}

export const sendDirectMessage = data => {
    socket.emit('direct-message', data)
}

export const getDirectChatHistory = data => {
    socket.emit('direct-chat-history', data)
}