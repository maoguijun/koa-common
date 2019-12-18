/*
 * @Author: maoguijun
 * @Date: 2019-12-17 13:40:20
 * @LastEditors  : maoguijun
 * @LastEditTime : 2019-12-18 21:18:33
 * @FilePath: \koa-common\routes\users\login.js
 */

const { models } = require("../../models");
const uuidv4 = require("uuid/v4");
const { resSuccess, resError, queryObject } = require("../../utils/format-res");
const { get } = require("lodash");
const queryString = require("querystring");

module.exports = async function(ctx, next) {
  const params = queryString.parse(ctx.querystring);
  const limit = parseInt(get(params, "limit") || 10);
  const offset = parseInt(get(params, "offset") || 0);

  const list = await models.book.findAll({
    limit,
    offset
  });

  const data = {
    list,
    limit,
    offset
  };

  ctx.body = resSuccess(data);
};
