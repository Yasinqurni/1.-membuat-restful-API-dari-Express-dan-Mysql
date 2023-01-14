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
            console.log(image)
            return image
        })
        Images.bulkCreate(images)
        .then((result) => {
            res.status(201).json({
                message: 'upload file successfully',
                data: result
            })
        })
        .catch((err) => {
            res.status(500).json({
                message: 'upload files failed'
            })
        })

    } catch (err) {
        return res.status(500).json({
            message: err.message
        })
    }
}

exports.remove = (req, res) => {
    const id = req.params.id

    Images.findByPk(id)
     .then((data) => {
        fs.unlink(
            __basedir + `/storage/upload/${data.file}`,
            function (err) {
                if (err) {
                    throw res.status(500).json({
                        message: err.message
                    })
                }

                Images.destroy({
                    where: {
                        id: id
                    }
                 }).then((num) => {
                    if(num == 1) {
                        res.status(200).json({
                            message: 'Images deleted successfully'
                        })
                    }else {
                        res.status(500).json({
                            message: `Images cannot be deleted with id: ${id}`,
                        })
                    }
                 }).catch((err) => {
                    res.status(500).json({
                        message: err.message
                    })
                 })

            })
     })

     .catch((err) => {
        res.status(500).json({
            message: `data with id: ${id} not found`
        })
     })
}