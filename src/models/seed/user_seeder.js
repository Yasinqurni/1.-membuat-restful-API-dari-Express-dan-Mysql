const db = require('../index')

const user = db.user

exports.userSeed = () => {
    user.create({
        name: 'Yasin',
        phone: '082239236521',
        email: 'yasin@gmail.com',
        password: 'abcde123',
    })
}