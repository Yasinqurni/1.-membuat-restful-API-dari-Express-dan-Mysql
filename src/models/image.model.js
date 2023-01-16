module.exports = (sequelize,Sequelize) => {
    const Images = sequelize.define('image', {
        item_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        file: {
            type: Sequelize.STRING,
            allowNull: false
        },
    })

    return Images
}