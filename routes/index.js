/*
 * @Author: maoguiun
 * @Date: 2019-12-06 11:36:20
 * @LastEditors: maoguiun
 * @LastEditTime: 2019-12-06 15:40:34
 * @FilePath: \koa-demo\routes\index.js
 */
const router = require("koa-router")();

router.get("/", async (ctx, next) => {
  await ctx.render("index", {
    title: "Hello Koa 2!"
  });
});

router.get("/string", async (ctx, next) => {
  ctx.body = "koa2 string";
});

router.get("/json", async (ctx, next) => {
  ctx.body = {
    title: "koa2 json"
  };
});
router.get("/cookie", async (ctx, next) => {
  ctx.cookies.set("cid", "hello world", {
    domain: "localhost", // 写cookie所在的域名
    path: "/cookie", // 写cookie所在的路径
    maxAge: 10 * 60 * 1000, // cookie有效时长
    expires: new Date("2020-02-15"), // cookie失效时间
    httpOnly: false, // 是否只用于http请求中获取
    overwrite: false // 是否允许重写
  });
  ctx.body = {
    title: "12345665"
  };
});

module.exports = router;
