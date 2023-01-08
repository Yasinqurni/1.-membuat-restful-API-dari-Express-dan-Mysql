const db = require('../models')
const Item = db.Item

exports.createItem = (req, res) => {
    if(!req.body) {
        res.status(400).json({
            message: 'body must be required'
        })
        return
    }

    const item = {
        ...req.body
    }

    Item.create(item)
    .then((result) => {
        res.status(201).json({
        data: result,
        message: 'Item created successfully'
        })
    })
    .catch((err) => {
        res.status(500).json({
        message: err.message
        })
    })
}


//coba sendiri
exports.readItem = (req, res) => {
    Item.findAll()
    .then((item) => {
        res.status(200).json({
            ...item,
            message: 'show all items'
        })
    })
    .catch((err) => {
        res.status(500).json({
            meesage: err.message
        })
    })
}


//coba sendiri masih error
exports.readItemById = (req, res) => {
    Item.findById(req.item.id)
    .then((item) => {
        res.status(200).json({
            ...item,
            message: `show ${req.item.id}`
        })
    })
    .catch((err) => {
        res.status(500).json({
            meesage: err.message
        })
    })
}