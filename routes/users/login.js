/*
 * @Author: maoguijun
 * @Date: 2019-12-17 13:40:20
 * @LastEditors: maoguijun
 * @LastEditTime: 2019-12-17 15:29:37
 * @FilePath: \koa-common\routes\users\login.js
 */

const { models } = require("../../models");
const uuidv4 = require("uuid/v4");
const { resSuccess, resError, queryObject } = require("../../utils/format-res");
const { get } = require("lodash");
const { sha256 } = require("../../utils/common");
const code = require("../../utils/code");

module.exports = async function(ctx, next) {
    const has = await models.account.findAll({
        limit: 1,
        where: {
            mail: get(ctx, "request.body.mail"),
            password: sha256(get(ctx, "request.body.password")),
        },
    });
    if (!get(has, "length")) {
        ctx.body = resError(code.loginError);
        return;
    }

    // session
    let session = get(ctx, "session");
    const userResult = get(has, ["0", "dataValues"]);

    session.isLogin = true;
    session.mail = userResult.mail;
    session.userId = userResult.id;

    ctx.body = resSuccess(queryObject(userResult, ["password"]));
};
