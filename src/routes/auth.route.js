const middleware = require('../middleware')
const controller = require('../controller/auth.controller')

// const bodyParser = require('body-parser')

module.exports = (app) => {
    // app.use(bodyParser.json())
    app.use(function(req, res, next) {
        res.header(
            'Access-Control-Allow-Headers',
            'Authorization, Origin, Content-Type, Accept'
        )

        next()
    })

    app.post('/api/auth/register',middleware.isUserExist, controller.register)

    app.post('/api/auth/login', controller.login)
}