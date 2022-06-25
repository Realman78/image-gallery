const db = require('../../models/models')
const Comment = db.comments
const User = db.users
const Post = db.posts
const {getSocketServerInstance} = require('../../socketStore')

const createComment = async (req, res) => {
    try {
        const io = getSocketServerInstance()
        if (!req.body.content || !req.body.user_id || !req.body.post_id) return res.status(404).send('No content provided')
        const body = {
            content: req.body.content,
            user_id: req.body.user_id,
            post_id: req.body.post_id
        }
        const user = await User.findOne({where: {id: body.user_id}})
        if (!user) return res.status(400).send('Non-existent user')
        const post = await Post.findOne({where: {id: body.post_id}})
        if (!post) return res.status(400).send('Non-existent post')
        const comment = await Comment.create(body)
        io.emit('new-comment', {postId: post.id})
        return res.status(201).send(comment)
    } catch (e) {
        console.log(e.message)
        return res.status(500).send("Error occured. Please try again.")
    }
}
module.exports = createComment