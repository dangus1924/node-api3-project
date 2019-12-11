const express = require('express');

const postRouter = require('./posts/postRouter')
const userRouter = require('./users/userRouter')

const helmet = require('helmet')
const logger = require('./middlware/logger')

const server = express();

server.use(logger)
server.use(helmet())

server.use(express.json())

server.use('/api/user', userRouter)
server.use('./api/post', postRouter)

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});



module.exports = server;
