const middleware = require('../middleware')
const controller = require('../controller/profile.controller')

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

    app.get('/api/profile',middleware.verifyToken, middleware.otorisasi, controller.profile)
}