const express = require('express')
const router = express.Router()
const { createComment, getPostComments, updateComment, deleteComment } = require('../controllers/comments/comments')
const requireLogin = require('../middleware/authMiddleware')

router.post('/create', requireLogin, createComment)
router.get('/get/:postid', getPostComments)
router.patch('/update/:commentid', updateComment)
router.post('/delete/:commentid', deleteComment)

module.exports = router