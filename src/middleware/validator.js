const validator = require('validator')
const db = require('../models')
const User =  db.user

validEmail = (req, res, next) => {
    
    let isEmail = validator.isEmail(req.body.email)

    if(isEmail == true) {
        next()
    }else {
        res.status(500).json({
            message: 'your email or phone number are invalid!'
        })
    }
}

validNoHP = (req, res, next) => {
    
    let isNoHP = validator.isMobilePhone(req.body.phone,['id-ID'])

    if(isNoHP == true) {
        next()
    }else {
        res.status(500).json({
            message: 'your email or phone number are invalid!'
        })
    }
}

module.exports = {
    validEmail,
    validNoHP,
}