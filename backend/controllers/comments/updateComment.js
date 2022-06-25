const db = require('../../models/models')
const Comment = db.comments
const {getSocketServerInstance} = require('../../socketStore')

const updateComment = async (req, res) => {
    try {
        const io = getSocketServerInstance()
        if (!req.body.content || !req.params.commentid) return res.status(404).send('No content provided')
        const comment = await Comment.findOne({where: {id: req.params.commentid}})
        if (!comment) return res.status(400).send('Non-existent comment')
        if (req.body.user_id != comment.user_id)return res.status(401).send('Unauthorized')

        let newComment = await comment.update({content: req.body.content})
        io.emit('new-comment', {postId: comment.post_id})
        return res.status(201).send(newComment)
    } catch (e) {
        console.log(e.message)
        return res.status(500).send("Error occured. Please try again.")
    }
}
module.exports = updateComment