const {isUserExist} = require('./register')
const {verifyToken} = require('./authentization')
const {otorisasi} = require('./authorization')
const {validEmail, validNoHP} = require('./validator')
const {accessUser} = require('./access_user')

module.exports = {
    isUserExist, 
    verifyToken,
    otorisasi,
    validEmail,
    validNoHP,
    accessUser,
}