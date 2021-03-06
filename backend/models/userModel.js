module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define("user", {
        username: {
            type: DataTypes.STRING,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    
    })

    return User

}