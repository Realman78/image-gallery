const express = require('express')
const router = express.Router()
const { createPost, getAllPosts, getUsersPosts, getPost, searchPosts } = require('../controllers/posts/posts')
const multer = require('multer')
const requireLogin = require('../middleware/authMiddleware')
const upload = multer({
    limits: {
        fileSize: 1e8
    },
    fileFilter(req, file, cb) {
        cb(undefined, true)
    }
})

router.post('/create', requireLogin, upload.single('image'), createPost)
router.get('/getall', getAllPosts)
router.get('/getuserposts/:id', getUsersPosts)
router.get('/getpost/:id', getPost)
router.get('/search', searchPosts)



module.exports = router