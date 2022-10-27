const db = require('../../models/models')
const Post = db.posts



const likePost = async (req, res) => {
    try {
        const post = await Post.findOne({ where: { id: req.params.id } })
        let isLiked = false
        if (!post) return res.status(404).send('No post found.')
        console.log(req.body.user_id)
        if (!post.likes) {
            const newPost = await post.update({ likes: req.body.user_id.toString().replaceAll("\"", "") })
            return res.status(200).send({ post: newPost, isLiked: true })
        }
        const cleanPosts = post.likes.replaceAll("\"", "")
        const likes = Array.from(cleanPosts.split(","))
        if (likes.includes(req.body.user_id.toString())) {
            likes.splice(likes.indexOf(req.body.user_id), 1)
            isLiked = false
        } else {
            likes.push(req.body.user_id)
            isLiked = true
        }
        const newPost = await post.update({ likes: likes.length ? likes.join(",") : null })

        return res.status(200).send({ post: newPost, isLiked })
    } catch (e) {
        console.log(e)
        return res.status(500).send("Error occured. Please try again.")
    }
}
module.exports = likePost