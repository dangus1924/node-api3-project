const express = require('express');
const users = require('./userDb')

const router = express.Router();

router.post('/', (req, res) => {
  // do your magic!
});

router.post('/:id/posts', (req, res) => {
  // do your magic!
});

router.get('/', (req, res) => {
  users.get()
    .then(user => {
      res.status(200).json(user)
    })
    .catch(err => {
      res.status(500).json({message: "Could not get data"})
    })
});

router.get('/:id', validateUserId(), (req, res) => {
  res.json(req.user)
});

router.get('/:id/posts', (req, res) => {
  // do your magic!
});

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id', (req, res) => {
  // do your magic!
});

//custom middleware

function validateUserId() {
  return (req, res, next) => {
      users.getById()
          .then(user => {
          if (user) {
              res.status(200).json(user)              
              next()
          } else {
              res.status(404).json({ message: "user not found" })
          }
          })
          .catch(err => {
          console.log(err)
          res.status(500).json({
              message: "Error retrieving users",
          })
      })
  }
}

function validateUser(req, res, next) {
  // do your magic!
}

function validatePost(req, res, next) {
  // do your magic!
}

module.exports = router;
