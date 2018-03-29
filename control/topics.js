const topic = require("../modules/topic");
const moment = require('moment')
const marked = require("marked")
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

exports.show = (req, res) => {
    //解构赋值  一个参数必须与对象内键值一致
    const { topicId } = req.params

    topic.findById(topicId, (err, result) => {
        if (err) {
            return res.send({
                code: 500,
                message: "服务器错误"
            });
        }
        result.content = marked(result.content)
        res.render("./topic/show.html", {
            result
        });
    })

}

exports.delete = (req, res) => {
    const { topicId } = req.params

    topic.findById(topicId, (err, result) => {
        if (err) {
            return res.send({
                code: 500,
                message: err.message
            })
        }
        if (result.userId === req.session.user.id) {

            topic.deleteTopicById(topicId, (err, result) => {
                if (err) {
                    return res.send({
                        code: 500,
                        message: err.message
                    })

                }
                res.send({
                    code: 200,
                    message: "删除成功"
                })
            })
        } else {
            res.send("没有权限删除此文章")
        }
    })
}


exports.edit = (req, res) => {
    const { topicId } = req.params
    topic.findById(topicId, (err, result) => {
        if (err) {
            return res.send({
                code: 500,
                message: err.message
            })
        }
        res.render("./topic/new.html", {
            result
        })
    })
}

exports.showEdit = (req, res) => {
    const { topicId } = req.params
    const body = req.body
    topic.updateTopicById(topicId, body, (err, result) => {
        if (err) {
            return res.send({
                code: 500,
                message: err.message
            })
        }
        res.send({
            code: 200,
            message: "修改成功"
        })
    })
}