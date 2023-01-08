
const db = require('../models')
const User = db.user

exports.profile = (req, res) => {
    User.findByPk(req.userId)
    .then((user) => {
            res.status(200).json({
                id: user.id,
                role: user.role,
                name: user.name,
                phone: user.phone,
                email: user.email
        })
    })
    .catch((err) => {
        res.status(401).json({
            message: err.message
        })
    })
}