/*
 * @Author: maoguijun
 * @Date: 2019-12-17 13:09:29
 * @LastEditors: maoguijun
 * @LastEditTime: 2019-12-17 15:31:58
 * @FilePath: \koa-common\routes\users.js
 */
const router = require("koa-router")();
const register = require("./register");
const login = require("./login");
const logout = require("./logout");

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

module.exports = router;
