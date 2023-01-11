const db = require('../models')
const Item = db.Item

accessUser = (req, res, next) => {
    const id = req.params.id

    Item.findByPk(id)
    .then((result) => {
        if (result.user_id !== req.userId){
            return res.status(401).json({
                message: 'update can only be done if the item is yours'
            })
            }
        next()
    })
}

module.exports = {
    accessUser,
}