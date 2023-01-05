module.exports = (sequelize,Sequelize) => {
    const AddCart = sequelize.define('addcart', {
        user_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
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
  
    })

    return AddCart
}