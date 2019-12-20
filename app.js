/*
 * @Author: maoguijun
 * @Date: 2019-12-17 13:09:29
 * @LastEditors  : maoguijun
 * @LastEditTime : 2019-12-20 15:29:28
 * @FilePath: \koa-common\app.js
 */
const Koa = require("koa");
const app = new Koa();
const views = require("koa-views");
const json = require("koa-json");
const onerror = require("koa-onerror");
const bodyparser = require("koa-bodyparser");
const koaBody = require("koa-body");
const logger = require("koa-logger");
const static = require("koa-static");
const path = require("path");
const models = require("./models");
const router = require("./routes/index");
const session = require("./middleware/session/index");
const authority = require("./middleware/authority/index");

// error handler
onerror(app);

// middlewares
app.use(
    koaBody({
        multipart: true,
        formidable: {
            maxFileSize: 200 * 1024 * 1024, // 设置上传文件大小最大限制，默认2M
        },
    })
);

app.use(
    bodyparser({
        enableTypes: ["json", "form", "text"],
    })
);

app.use(json());
app.use(logger());
app.use(require("koa-static")(__dirname + "/public"));

app.use(
    views(__dirname + "/views", {
        extension: "pug",
    })
);

// session
app.use(session);

// 数据库
(async () => {
    await models.sequelize.sync();
    console.log("数据库连接成功!\n");
})().catch(err => console.error("数据库连接失败:", err));

// 静态资源目录对于相对入口文件index.js的路径
const staticPath = "./static";

//
app.use(
    authority({
        exclude: /(^\/users(\/|\\))|(^\/book(\/|\\)(list|index))/,
    })
);

// logger
app.use(async (ctx, next) => {
    const start = new Date();
    await next();
    const ms = new Date() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

app.use(static(path.join(__dirname, staticPath)));

// routes
app.use(router.routes()).use(router.allowedMethods());

// error-handling
app.on("error", (err, ctx) => {
    console.error("server error", err, ctx);
});

module.exports = app;
