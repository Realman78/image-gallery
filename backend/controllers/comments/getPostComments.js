const db = require('../../models/models')
const Post = db.posts
const Comment = db.comments



const getPostComments = async (req, res) => {
    try {
        const comments = await Post.findAll({
            include: [{
                model: Comment,
                as: 'comment'
            }], where: {
                id: req.params.postid
            }
        })
        return res.status(200).send(comments)
    } catch (e) {
        console.log(e)
        return res.status(500).send("Error occured. Please try again.")
    }
}
module.exports = getPostComments