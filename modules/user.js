const connection = require('../control/db-helper');

exports.finUserByEmail = (email, callback) => {
    const sqlStr = 'SELECT * FROM `users` WHERE `email`=?'
    connection.query(sqlStr, [email], (err, results) => {
        if (err) {
            return callback(err)
        }
        callback(null, results[0]);
    })
}
exports.findAll = () => {

}
exports.finUserByNickname = (nickName, callback) => {
    const sqlStr = 'SELECT * FROM `users` WHERE `nickname`=?'
    connection.query(sqlStr, [nickName], (err, results) => {
        if (err) {
            return callback(err)
        }
        callback(null, results[0]);
    })
}
exports.create = (body, callback) => {
    const sqlStr = 'INSERT INTO `users` SET ?'
    connection.query(sqlStr, body, (err, results) => {
        if (err) {
            return callback(err)
        }
        callback(null, results);
    })

}