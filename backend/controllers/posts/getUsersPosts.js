const db = require('../../models/models')
const Post = db.posts
const User = db.users


const getUsersPosts = async (req, res) => {
    try {
        const posts = await User.findAll({
            include: [{
                model: Post,
                as: 'post'
            }], where: {
                id: req.params.id
            }
        })
        return res.status(200).send(posts)
    } catch (e) {
        console.log(e)
        return res.status(500).send("Error occured. Please try again.")
    }
}
module.exports = getUsersPosts