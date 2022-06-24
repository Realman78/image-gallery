const db = require('../../models/models')
const Post = db.posts



const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.findAll({})
        return res.status(200).send(posts)
    } catch (e) {
        console.log(e)
        return res.status(500).send("Error occured. Please try again.")
    }
}
module.exports = getAllPosts