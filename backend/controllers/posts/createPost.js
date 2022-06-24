const db = require('../../models/models')
const Post = db.posts
const User = db.users
const {uploadImage} = require('../../utils/cloudinary-helper')


const createPost = async (req, res) => {
    try {
        if (!req.body.image || !req.body.description || !req.body.title || !req.body.user_id) return res.status(400).send('Insufficient data provided.')
        const url = await uploadImage(req.body.image)
        const body = {
            title: req.body.title,
            image: url,
            description: req.body.description,
            user_id: req.body.user_id
        }
        const user = await User.findOne({where: {id: body.user_id}})
        if (!user) return res.status(400).send('Non-existent user')
        const post = await Post.create(body)
        return res.status(201).send(post)
    } catch (e) {
        console.log(e.message)
        return res.status(500).send("Error occured. Please try again.")
    }
}
module.exports = createPost