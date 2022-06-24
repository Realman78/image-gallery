const express = require('express')
const router = express.Router()
const { createComment, getPostComments } = require('../controllers/comments/comments')
const requireLogin = require('../middleware/authMiddleware')

router.post('/create', requireLogin, createComment)
router.get('/get/:postid', getPostComments)

module.exports = router