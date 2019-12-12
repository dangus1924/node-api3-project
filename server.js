const express = require('express');

const postRouter = require('./routes/posts/postRouter')
const userRouter = require('./routes/users/userRouter')

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

server.use((res, req) => {
  res.status(404).json({ message: "You have ventured into the abyss!"})
})

server.use((err, req, res, next) => {
  console.log(err)
  res.status(500).json({
    message: "An error occurred, please try again later."
  })
})


module.exports = server;
