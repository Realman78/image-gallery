const socketStore = require('./socketStore')
// const { setupMaster, setupWorker } = require("@socket.io/sticky");
// const { createAdapter, setupPrimary } = require("@socket.io/cluster-adapter");
const registerSocketServer = server => {
    const io = require('socket.io')(server, {
        cors: {
            origin: '*',
            methods: ["GET", "POST"]
        }
    })
    // // use the cluster adapter
    // io.adapter(createAdapter());

    // // setup connection with the primary process
    // setupWorker(io);
    socketStore.setSocketServerInstance(io)

    io.on('connection', socket => {
        console.log('user connected')
    })
}



module.exports = {
    registerSocketServer
}