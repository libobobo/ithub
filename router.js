const express = require("express");
const router = express.Router();
const index = require("./control/index");
const user = require("./control/user");
router.get("/",index.showIndex)

router.get("/user/register",user.showRegister)
      .post("/user/register",user.register)
      .get("/user/login",user.showLogin)
      .post("/user/login",user.login)
      .get("/user/logout",user.logout)
module.exports = router;