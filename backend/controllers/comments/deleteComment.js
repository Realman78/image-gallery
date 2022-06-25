const db = require('../../models/models')
const Comment = db.comments
const {getSocketServerInstance} = require('../../socketStore')

const deleteComment = async (req, res) => {
    try {
        const io = getSocketServerInstance()
        if (!req.params.commentid) return res.status(404).send('No comment id provided')
        const comment = await Comment.findOne({where: {id: req.params.commentid}})
        if (!comment) return res.status(400).send('Non-existent comment')
        if (req.body.user_id != comment.user_id)return res.status(401).send('Unauthorized')
        await comment.destroy()
        io.emit('new-comment', {postId: comment.post_id})
        return res.status(201).send(comment)
    } catch (e) {
        console.log(e.message)
        return res.status(500).send("Error occured. Please try again.")
    }
}
module.exports = deleteComment