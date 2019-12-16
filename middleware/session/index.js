const Koa = require("koa");
const session = require("koa-session-minimal");
const MysqlSession = require("koa-mysql-session");

const app = new Koa();
const config = require("../../config/sqlConfig/default");
const mysqlConfig = config.mysql;
// 配置存储session信息的mysql
let store = new MysqlSession({
    user: mysqlConfig.username,
    password: mysqlConfig.password,
    database: mysqlConfig.database,
    host: mysqlConfig.options.host
});

// 存放sessionId的cookie配置
let cookie = {
    maxAge: "", // cookie有效时长
    expires: "", // cookie失效时间
    path: "", // 写cookie所在的路径
    domain: "", // 写cookie所在的域名
    httpOnly: "", // 是否只用于http请求中获取
    overwrite: "", // 是否允许重写
    secure: "",
    sameSite: "",
    signed: ""
};

module.exports = session({
    key: "SESSION_ID",
    store: store,
    cookie: cookie
});
