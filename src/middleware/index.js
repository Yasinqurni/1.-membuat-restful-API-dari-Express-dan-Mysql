const {isUserExist} = require('./register')
const {verifyToken} = require('./authentization')
const {otorisasi} = require('./authorization')
const {validEmail, validNoHP} = require('./validator')

module.exports = {
    isUserExist, 
    verifyToken,
    otorisasi,
    validEmail,
    validNoHP,
}