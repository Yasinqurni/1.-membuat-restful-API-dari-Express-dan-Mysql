const fs = require('fs')
const {uploadFile, __basedir} = require('../services/upload')
const db = require ('../models')
const Images = db.Images

exports.upload = async (req, res) => {
    const id = req.params.id
    try {
        await uploadFile(req, res)

        if(req.files == undefined){
            return res.status(400).json({
                message: 'please upload a file'
            })
        }

        let images = req.files.map((item) => {
            const image = {}
            image.item_id = id
            image.file = item.filename
            return image
        })
        Images.bulkCreate(images).then((result) => {
            res.status(201).json({
                message: 'upload file successfully',
                data: result
            }).catch((err) => {
                res.status(500).json({
                    message: 'upload files failed'
                })
            })
        })
    } catch (err) {
        console.log(err)
        return res.status(500).json({
            message: err.message
        })
    }
}