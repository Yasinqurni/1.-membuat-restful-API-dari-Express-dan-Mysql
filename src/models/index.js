const db = require('../config/database')

db.user = require('./user_model')(db.sequelize, db.Sequelize)
db.category = require('./category_model')(db.sequelize, db.Sequelize)
db.Item = require('./item_model')(db.sequelize, db.Sequelize)
db.AddCart = require('./addcart_model')(db.sequelize, db.Sequelize)
db.Order = require('./order_model')(db.sequelize, db.Sequelize)
db.Images = require('./image.model')(db.sequelize, db.Sequelize)

module.exports = db
