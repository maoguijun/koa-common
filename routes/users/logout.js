/*
 * @Author: maoguijun
 * @Date: 2019-12-17 15:31:27
 * @LastEditors: maoguijun
 * @LastEditTime: 2019-12-17 16:18:29
 * @FilePath: \koa-common\routes\users\logout.js
 */
const { resSuccess } = require("../../utils/format-res");
const { get } = require("lodash");

module.exports = async function(ctx) {
  // session
  let session = get(ctx, "session");

  if (get(session, "isLogin")) {
    session.isLogin = false;
  }

  ctx.body = resSuccess({}, "登出成功");
};
