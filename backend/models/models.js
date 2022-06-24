const dbConfig = require('../config/db.js');

const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,

        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle

        }
    }
)

sequelize.authenticate()
.then(() => {
    console.log('connected..')
})
.catch(err => {
    console.log('Error'+ err)
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.users = require('./userModel.js')(sequelize, DataTypes)
db.posts = require('./postModel.js')(sequelize, DataTypes)
db.comments = require('./commentModel.js')(sequelize, DataTypes)

db.sequelize.sync({ force: false })
.then(() => {
    console.log('yes re-sync done!')
})



// 1 to Many Relation

db.users.hasMany(db.posts, {
    foreignKey: 'user_id',
    as: 'post'
})
db.users.hasMany(db.comments, {
    foreignKey: 'user_id',
    as: 'comment'
})

db.posts.belongsTo(db.users, {
    foreignKey: 'user_id',
    as: 'user'
})

db.posts.hasMany(db.comments, {
    foreignKey: 'post_id',
    as: 'comment'
})
db.comments.belongsTo(db.posts, {
    foreignKey: 'post_id',
    as: 'post'
})
db.comments.belongsTo(db.users, {
    foreignKey: 'user_id',
    as: 'user'
})




module.exports = db