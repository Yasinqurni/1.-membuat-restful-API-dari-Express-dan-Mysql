const jwt = require('jsonwebtoken')
const config = require('../config/auth')
// const db = require('../models')
// const User = db.User

otorisasi = (req, res, next) => {
    let token = req.headers['authorization']

    if(!token) {
        return res.status(403).json({
            message: 'no token provided!'
        })
    }

    jwt.verify(token, config.secret, (err, decoded) =>{
        if(err) {
            return res.status(401).json({
                message: 'unauthorized',
            })
        }
        req.UserRole = decoded.role
        
        if(req.UserRole == 'admin' || req.UserRole == 'seller') {
            next()
        }else{
            res.status(500).json({
                message: 'you are not allowed'
            })
        }
    })


}

module.exports = {
    otorisasi,
}