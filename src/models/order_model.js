module.exports = (sequelize,Sequelize) => {
    const Order = sequelize.define('order', {
        user_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        item_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        category_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
         status_order: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        
    })

    return Order
}