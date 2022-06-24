const db = require('../../models/models')
const User = db.users

const postLogin = async (req, res) => {
    try {
        const body = {
            username: req.body.username,
            password: req.body.password
        }
        const user = await User.findOne({where: {
            username: body.username,
            password: body.password
        }})
        if (!user) return res.status(401).send('Incorrect credentials')
        //req.session.user = user.dataValues
        return res.status(200).send(user.dataValues)
    } catch (e) {
        console.log(e)
        return res.status(500).send("Error occured. Please try again.")
    }
}
module.exports = postLogin