const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
// const bodyParser = require('body-parser')


const app = express()
dotenv.config()

let whitelist = ['http://localhost:8080']
let corsOptions = {
    origin: function(origin,callback) {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

// app.use(bodyParser.json())

const db = require('./models')
const seed = require('./models/seed')
db.sequelize
    .sync() //untuk membuat table ketikkan {force: true}
    .then(() => {
        // seed.userSeed()
        console.log('database connected')
    })
    .catch(err => {
        console.error(`database connection error: ${err.message}`)
    })


app.get('/', (req, res) => {
    res.json({
        message: 'server is running by Yasin'
    })
})

require('./routes/auth.route')(app)
require('./routes/profile.route')(app)
require('./routes/item.route')(app)

const PORT = process.env.APP_PORT || 5000

app.listen(PORT, () => {
    console.log(`server listening on server port: ${PORT} `)
})