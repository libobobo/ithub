const Joi = require('joi')

exports.checkSigninBody = (req, res, next) => {
    Joi.validate(req.body, { // 基本数据校验
        email: Joi.string().email(),
        password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/)
    }, (err, value) => {
        if (err) { // 判断客户端发送的数据是否有错误
            res.send({
                code: 400,
                message: err.details
            })
        } else {
            next()
        }
    })
}