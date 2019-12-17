/*
 * @Author: maoguijun
 * @Date: 2019-12-17 17:37:22
 * @LastEditors: maoguijun
 * @LastEditTime: 2019-12-17 17:47:34
 * @FilePath: \koa-common\utils\authority.js
 */
const { get } = require("lodash");

/**
 * 判断是否没登录凭证
 * @param {context} ctx
 */
const notLogin = async ctx => {
  let session = get(ctx, "session");

  if (!session) {
    return "请先重新登录";
  }

  if (!get(session, "isLogin")) {
    return "登录已过期，请重新登录";
  }
  return;
};

module.exports = {
  notLogin
};
