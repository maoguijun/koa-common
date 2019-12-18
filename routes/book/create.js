/*
 * @Author: maoguijun
 * @Date: 2019-12-17 13:40:20
 * @LastEditors  : maoguijun
 * @LastEditTime : 2019-12-18 19:07:06
 * @FilePath: \koa-common\routes\users\login.js
 */

const { models } = require("../../models");
const uuidv4 = require("uuid/v4");
const { resSuccess } = require("../../utils/format-res");
const { get } = require("lodash");

module.exports = async function(ctx, next) {
    const data = {
        ...get(ctx, "request.body"),
        owner: get(ctx, ["session", "userId"]),
        createdUsr: get(ctx, ["session", "userId"]),
        updateUsr: get(ctx, ["session", "userId"]),
    };
    const result = await models.book.create(data);

    ctx.body = resSuccess(get(result, "dataValues"));
};
