const db = require('../../models/models')
const Post = db.posts
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const searchPosts = async (req, res) => {
    if (!req.query.search) return res.status(400).send('No search term provided')

    try {
        const posts = await Post.findAll({
            where: {
                title: {
                    [Op.like]: `%${req.query.search}%`
                }
            }
        })
        if (!posts) return res.status(404).send('No posts found.')
        return res.status(200).send(posts)
    } catch (e) {
        console.log(e)
        return res.status(500).send("Error occured. Please try again.")
    }
}
module.exports = searchPosts