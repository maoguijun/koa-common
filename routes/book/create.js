/*
 * @Author: maoguijun
 * @Date: 2019-12-17 13:40:20
 * @LastEditors: maoguijun
 * @LastEditTime: 2019-12-17 18:07:28
 * @FilePath: \koa-common\routes\users\login.js
 */

const { models } = require("../../models");
const uuidv4 = require("uuid/v4");
const { resSuccess, resFaild, queryObject } = require("../../utils/format-res");
const { notLogin } = require("../../utils/authority");
const { get } = require("lodash");

module.exports = async function(ctx, next) {
  const notLoginResult = await notLogin(ctx);

  if (notLoginResult) {
    ctx.body = resFaild(notLoginResult);
    return;
  }

  const data = {
    ...get(ctx, "request.body")
    // createdUsr: get(ctx, ["session", "userId"])
  };
  const result = await models.book.create(data);

  ctx.body = resSuccess(get(result, "dataValues"));
};
