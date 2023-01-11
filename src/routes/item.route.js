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

    app.post('/api/item/create',[middleware.verifyToken, middleware.otorisasi], controller.createItem)
    app.get('/api/item/', controller.readItem)
    app.get('/api/item/:id', controller.readItemById)
    app.patch('/api/item/update/:id',[middleware.verifyToken, middleware.otorisasi,middleware.accessUser], controller.updateItem)
    app.delete('/api/item/delete/:id',[middleware.verifyToken, middleware.otorisasi,middleware.accessUser], controller.deleteItem)
}