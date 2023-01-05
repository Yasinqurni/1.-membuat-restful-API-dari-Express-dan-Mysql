module.exports = (sequelize,Sequelize) => {
    const Images = sequelize.define('image', {

        item_id: {
            type: Sequelize.STRING,
            allowNull: false
        },
        file: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
    })

    return Images
}