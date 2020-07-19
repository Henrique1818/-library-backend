const express = require('express');
const server = express();

server.use(express.json());

const LibRouter = require('./Router');
server.use('/construction', LibRouter);

server.listen(5000, () => {
    console.log('API running port 5000');
})