const express = require("express");
const checkLogin = require("./middlewares/checkLogin")

const router = express.Router();
const index = require("./control/index");
const user = require("./control/user");
const topic = require("./control/topics");
router.get("/",index.showIndex)

router.get("/user/register",user.showRegister)
      .post("/user/register",user.register)
      .get("/user/login",user.showLogin)
      // 当你 POST /signin 的时候，先调用 checkSigninBody 中间件，校验通过才真正的执行 login 中间件
      .post("/user/login",checkLogin.checkSigninBody,user.login)
      .get("/user/logout",user.logout)


router.get("/topic/new",topic.showNew)
router.post("/topic/new",topic.createTopic)
router.get("/topic/:topicId",topic.show)
router.get("/topic/:topicId/edit",topic.edit)
router.get("/topic/:topicId/delete",topic.delete)
router.post("/topic/:topicId/edit",topic.showEdit)
module.exports = router;