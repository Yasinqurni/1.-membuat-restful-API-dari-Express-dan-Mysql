const db = require('../index')

const user = db.user

exports.userSeed = () => {
    user.create({
        name: 'Yasin',
        role: 'admin',
        phone: '082239236521',
        email: 'yasin@gmail.com',
        password: 'abcde123',
    })
}