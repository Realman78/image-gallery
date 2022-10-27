module.exports = (sequelize, DataTypes) => {

    const Post = sequelize.define("post", {
        image: {
            type: DataTypes.STRING,
            allowNull: false
        },
        title:{
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
        },
        likes: {
            type: DataTypes.JSON
        }
    
    })

    return Post

}