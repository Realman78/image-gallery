const express = require('express')
const cors = require('cors')
require('dotenv').config()
const http = require('http')
const PORT = process.env.PORT || 5000
const socketServer = require('./socket')
// const { setupMaster, setupWorker } = require("@socket.io/sticky");
// const { createAdapter, setupPrimary } = require("@socket.io/cluster-adapter");


// const cluster = require('node:cluster')
// const numCPUs = require('node:os').cpus().length;
// cluster.schedulingPolicy = cluster.SCHED_RR
// if (cluster.isPrimary) {
//     const httpServer = http.createServer();
//     // setup sticky sessions
//     setupMaster(httpServer, {
//         loadBalancingMethod: "least-connection",
//     });

//     setupPrimary();

//     // Node.js > 16.0.0
//     cluster.setupPrimary({
//         serialization: "advanced",
//     });
//     httpServer.listen(PORT, () => {
//         console.log(`Server is up and running on port ${PORT}`)
//     })
//     console.log(`Primary ${process.pid} is running`);
//     for (let i = 0; i < numCPUs; i++) {
//         cluster.fork()
//     }
//     cluster.on("exit", (worker, code, signal) => {
//         console.log(`worker ${worker.process.pid} died`);
//         cluster.fork();
//     })
// } else {
    const app = express()
    console.log(`Worker ${process.pid} started`);
    const server = http.createServer(app)
    socketServer.registerSocketServer(server)
    app.use(cors())
    app.use(express.json({ limit: '50mb' }));
    app.use(express.urlencoded({ extended: true, limit: '50mb' }));

    //API routes
    const authRouter = require('./routes/authRoutes')
    const postRouter = require('./routes/postRoutes')
    const commentRouter = require('./routes/commentRoutes')
    app.use('/api/auth', authRouter)
    app.use('/api/posts', postRouter)
    app.use('/api/comments', commentRouter)

    server.listen(PORT, () => {
        console.log(`Server is up and running on port ${PORT}`)
    })
// }