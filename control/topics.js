const topic = require("../modules/topic");
const moment = require('moment')
exports.showNew = (req, res) => {
    res.render("./topic/edit.html");
}

exports.createTopic = (req, res) => {
    const body = req.body
    body.userId = req.session.user.id
    body.createdAt = moment().format("YYYY-MM-DD HH:mm:ss")
    topic.create(body, (err, result) => {
        if (err) {
            return res.send({
                code: 500,
                message: "服务器错误"
            })
        }

        res.send({
            code: 200,
            message: "发布成功"
        })
    })
}