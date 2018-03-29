const express = require("express");
const router = require("./router");
const session = require('express-session')
const bodyParser = require('body-parser')//引入body-parser模块 方便拿到请求体数据 
//持久化session 数据
const MySQLStore = require('express-mysql-session')(session);
const options = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '123456',
    database: 'ithub'
};

const app = express();

const sessionStore = new MySQLStore(options);


//配置session插件 就可以使用req.session
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    store: sessionStore//将session存储到数据库
}))
//配置全局session中间件
app.use((req, res, next) => {
    app.locals.sessionUser = req.session.user
    next()//执行后续匹配中间件代码
})

//公开静态资源
app.use('/public', express.static('./public/'))
app.use('/node_modules', express.static('./node_modules/'))
app.engine('html', require('express-art-template'))//为服务配置读写html文件模版
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())//配置boayparser 

app.use(router);

//配置404 中间件
app.use((req, res, next) => {
    res.render("404.html")
})
app.listen(3000, () => {
    console.log("running...");
})