const express = require('express');

const router = express.Router();

const feedController = require('../controllers/feed')

// GET and POST /feed/posts
router.get('/posts' , feedController.getPosts)
router.post('/posts' , feedController.postPosts)

module.exports = router;