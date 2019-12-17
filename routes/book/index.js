/*
 * @Author: maoguijun
 * @Date: 2019-12-17 16:53:19
 * @LastEditors: maoguijun
 * @LastEditTime: 2019-12-17 17:15:56
 * @FilePath: \koa-common\routes\book\index.js
 */
const router = require("koa-router")();
const list = require("./list");
const create = require("./create");
const update = require("./update");
const info = require("./info");

router.get("/list", list);
router.post("/create", create);
router.post("/update", update);
router.get("/info/:id", info);

module.exports = router;
