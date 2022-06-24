const socketStore = require('./socketStore')

const registerSocketServer = server=>{
    const io = require('socket.io')(server, {
        cors: {
            origin: '*',
            methods: ["GET", "POST"]
        }
    })
    socketStore.setSocketServerInstance(io)

    io.on('connection', socket=>{
        console.log('user connected')
    })
}



module.exports = {
    registerSocketServer
}