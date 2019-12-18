/*
 * @Author: maoguijun
 * @Date: 2019-12-17 13:39:08
 * @LastEditors: maoguijun
 * @LastEditTime: 2019-12-17 17:27:10
 * @FilePath: \koa-common\routes\users\register.js
 */
const { models } = require("../../models");
const { resSuccess, resError, queryObject } = require("../../utils/format-res");
const { get } = require("lodash");
const code = require("../../utils/code");
const { sha256 } = require("../../utils/common");

module.exports = async function(ctx, next) {
    const has = await models.account.findAll({
        limit: 1,
        where: {
            mail: get(ctx, "request.body.mail"),
        },
    });
    if (get(has, "length")) {
        ctx.body = resError(code.registered);
        return;
    }
    const data = {
        ...get(ctx, "request.body"),
        password: sha256(get(ctx, "request.body.password")),
    };
    const result = await models.account.create(data);

    ctx.body = resSuccess(queryObject(get(result, "dataValues"), ["password"]));
};
