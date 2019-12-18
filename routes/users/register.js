/*
 * @Author: maoguijun
 * @Date: 2019-12-17 13:39:08
 * @LastEditors: maoguijun
 * @LastEditTime: 2019-12-17 17:27:10
 * @FilePath: \koa-common\routes\users\register.js
 */
const { models } = require("../../models");
const uuidv4 = require("uuid/v4");
const { resSuccess, resError, queryObject } = require("../../utils/format-res");
const { get } = require("lodash");

module.exports = async function(ctx, next) {
  const has = await models.account.findAll({
    limit: 1,
    where: {
      mail: get(ctx, "request.body.mail")
    }
  });
  if (get(has, "length")) {
    ctx.body = resError("该邮箱已经注册了");
    return;
  }

  const result = await models.account.create(get(ctx, "request.body"));

  ctx.body = resSuccess(queryObject(get(result, "dataValues"), ["password"]));
};
