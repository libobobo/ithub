const topic = require("../modules/topic")
exports.showIndex = (ret, res) => {
    topic.findAll((err, topics) => {
        if (err) {
            return res.send({
                code: 500,
                message: err.message
            });
        }
        res.render("index.html", {
            // user: ret.session.user,
            topics
        });
    })
}