/*
 * @Author: maoguiun
 * @Date: 2019-12-06 11:36:20
 * @LastEditors: maoguijun
 * @LastEditTime: 2019-12-17 17:36:11
 * @FilePath: \koa-demo\routes\index.js
 */
const router = require("koa-router")();
const users = require("./users");
const upload = require("./upload");
const book = require("./book");

router.use("/users", users.routes(), users.allowedMethods());


router.use("/upload", upload.routes(), upload.allowedMethods());
router.use("/book", book.routes(), book.allowedMethods());

module.exports = router;
