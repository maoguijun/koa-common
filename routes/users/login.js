/*
 * @Author: maoguijun
 * @Date: 2019-12-17 13:40:20
 * @LastEditors: maoguijun
 * @LastEditTime: 2019-12-17 15:29:37
 * @FilePath: \koa-common\routes\users\login.js
 */

const { models } = require("../../models");
const uuidv4 = require("uuid/v4");
const { resSuccess, resFaild, queryObject } = require("../../utils/format-res");
const { get } = require("lodash");

module.exports = async function(ctx, next) {
  const has = await models.account.findAll({
    limit: 1,
    where: {
      mail: get(ctx, "request.body.mail"),
      password: get(ctx, "request.body.password")
    }
  });
  if (!get(has, "length")) {
    ctx.body = resFaild("输入的邮箱或者密码错误!");
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
