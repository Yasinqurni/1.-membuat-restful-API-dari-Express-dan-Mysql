module.exports = (sequelize,Sequelize) => {
    const Item = sequelize.define('item', {
        // user_id: {
        //     type: Sequelize.INTEGER,
        //     allowNull: false
        // },
        name_item: {
            type: Sequelize.STRING,
            allowNull: false
        },
        category_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        price: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        sold: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defultvalue: false
        },
        loc_latitude: {
            type: Sequelize.STRING,
            allowNull: false
        },
        loc_longitude: {
            type: Sequelize.STRING,
            allowNull: false
        },

    })

    return Item
}