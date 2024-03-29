const db = require('../models')
const User =  db.user

isUserExist = (req, res, next) => {
    User.findOne({
        where: {
            email: req.body.email
        }    
    }).then((user) => {
        if (user) {
            res.status(400).json({
                message: 'User already exists'
            })
            return
        }
        next()
    })
}

module.exports = {
    isUserExist,
}