const db = require("../control/db-helper");
exports.create = (topics, callback) => {
    const sqlStr = "insert into topics set ?"
    db.query(sqlStr, topics, (err, result) => {
        if (err) {
            return callback(err)
        }
        callback(null, result)
    })
}

exports.findAll = (callback) => {
    const sqlStr = "select * from topics"
    db.query(sqlStr, (err, result) => {
        if (err) {
            return callback(err)
        }
        callback(null, result)
    })
}

exports.deleteTopicById = (id, callback) => {
    const sqlStr = "delete from topics where 'id'=?"
    db.query(sqlStr, [id], (err, result) => {
        if (err) {
            return callback(err)
        }
        callback(null, result)
    })
}

exports.updateTopicById = (topic, callback) => {
    const sqlStr = "UPDATE `topics` SET `title`=?, `content`=? WHERE `id`=?"
    db.query(sqlStr, [topic.title, topic.content, topic.id], (err, result) => {
        if (err) {
            return callback(err)
        }
        callback(null, result)
    })
}