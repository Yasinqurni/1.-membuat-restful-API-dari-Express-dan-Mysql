const db = require('../models')
const config = require('../config/auth')
const User = db.user
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.register = (req, res) => {
    User.create({
        name: req.body.name,
        role: req.body.role,
        phone: req.body.phone,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
    }).then((user) => {
        res.status(201).json({
            message: 'user was created successfully',
            ...user
        })
    }).catch((err)=>{
        res.status(500).json({
            message: err.message,
        })
    })

}


exports.login = (req, res) => {
    User.findOne({
        where:{
            email: req.body.email
        }
    })
    .then((user) => {

        if(!user){
            res.status(404).json({
                accesToken: null,
                message: 'Email not found'
            })
        }

        let passwordIsValid = bcrypt.compareSync(req.body.password, user.password)
    
        if(!passwordIsValid) {
            return res.status(401).json({
                accesToken: null,
                message: 'password is invalid',
            })
        }
        
        let token = jwt.sign({ id: user.id, role: user.role}, config.secret, {
            expiresIn: 86400, //24 jam
        })

        res.status(200).json({
            id: user.id,
            name: user.name,  
            role: user.role,  
            email: user.email,
            accesToken: token,
        })     
    })
    .catch((err) => {
        res.status(500).json({
            message: err.message
        })
    })

}
