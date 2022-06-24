const db = require('../../models/models')
const User = db.users

const postRegister = async (req, res) => {
    try {
        const body = {
            username: req.body.username,
            password: req.body.password
        }
        const userExists = await User.findOne({where: {username: body.username}})
        if (userExists) return res.status(404).send({error: 'Username taken'})
        const user = await User.create(body)
        //req.session.user = user
        return res.status(201).send(user)
    } catch (e) {
        console.log(e)
        return res.status(500).send("Error occured. Please try again.")
    }
}
module.exports = postRegister