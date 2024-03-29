const middleware = require('../middleware')
const controller = require('../controller/auth.controller')

// const bodyParser = require('body-parser')

module.exports = (app) => {
    // app.use(bodyParser.json())
    app.use(function(req, res, next) {
        res.header(
            'Access-Control-Allow-Headers',
            'authorization, Origin, Content-Type, Accept'
        )

        next()
    })

    app.post('/api/register',[middleware.isUserExist,middleware.validEmail,middleware.validNoHP], controller.register)

    app.post('/api/login', controller.login)
}