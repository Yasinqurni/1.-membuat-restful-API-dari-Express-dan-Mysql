const middleware = require('../middleware')
const controller = require('../controller/item.controller')

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

    app.post('/api/item', controller.createItem)
    app.get('/api/item', controller.readItem)
    app.post('/api/item/id', controller.readItemById)
}