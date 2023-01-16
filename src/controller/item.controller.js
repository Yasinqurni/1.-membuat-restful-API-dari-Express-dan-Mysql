const db = require('../models')
const Item = db.Item
const Images = db.Images




//hanya admin dan seller yang bisa akses
exports.createItem = (req, res) => {
    if(!req.body) {
        res.status(400).json({
            message: 'body must be required'
        })
        return
    }

    const item = {
        user_id: req.userId,
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


//read item seluruh role bisa akses
exports.readItem = (req, res) => {
    Item.findAll({
        include: Images
    })
    .then((item) => {
        res.status(200).json({
            ...item,
            total_item: item.length,
        })
    })
    .catch((err) => {
        res.status(500).json({
            meesage: err.message
        })
    })
}


//read by id seluruh role bisa akses
exports.readItemById = (req, res) => {
    const id = req.params.id

    Item.findByPk(id)   
    .then((result) => {
        res.status(200).json({
            data: result,
            message: `show item with id= ${id}`
        })
    })
    .catch((err) => {
        res.status(500).json({
            message: err.message
        })
    })
}

//update item role admin dan seller saja yg bisa akses
exports.updateItem = (req, res) => {
    const id = req.params.id

    Item.update(req.body, {
        where: {id: id}
    })
    .then((num) => {
        if(num == 1){
            res.status(200).json({
                message: 'Updated successfull!'
            })
        }else{
            res.status(400).json({
                message: `cannot update whith id= ${id}`
            })
        }
    }).catch((err) => {
        res.status(500).json({
            message: err.message
        })
    })
}

exports.deleteItem = (req, res) => {
    const id = req.params.id

    Item.destroy({
        where:{
            id: id,
        },
    })
    .then((num) => {
        if(num == 1){
            res.status(200).json({
                message: 'Delete successfull!'
            })
        }else{
            res.status(400).json({
                message: `cannot delete whith id= ${id}`
            })
        }
    }).catch((err) => {
        res.status(500).json({
            message: err.message
        })
    })
}
