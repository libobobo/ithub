const express = require("express");
const router = express.Router();
const index = require("./control/index");
const user = require("./control/user");
const topic = require("./control/topics");
router.get("/",index.showIndex)

router.get("/user/register",user.showRegister)
      .post("/user/register",user.register)
      .get("/user/login",user.showLogin)
      .post("/user/login",user.login)
      .get("/user/logout",user.logout)


router.get("/topic/new",topic.showNew)
router.post("/topic/new",topic.createTopic)
module.exports = router;