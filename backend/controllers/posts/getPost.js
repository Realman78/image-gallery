const db = require('../../models/models')
const Post = db.posts


const getPost = async (req, res) => {
    try {
        const post = await Post.findOne({where: {id: req.params.id}})
        if (!post) return res.status(404).send('No post found.')
        return res.status(200).send(post)
    } catch (e) {
        console.log(e)
        return res.status(500).send("Error occured. Please try again.")
    }
}
module.exports = getPost