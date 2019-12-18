/*
 * @Author: maoguijun
 * @Date: 2019-12-18 20:40:29
 * @LastEditors  : maoguijun
 * @LastEditTime : 2019-12-18 20:41:45
 * @FilePath: \koa-common\middleware\authority\index.js
 */
const { resError } = require("../../utils/format-res");
const code = require("../../utils/code");
const { get } = require("lodash");
/**
 * 校验登录状态是否有效
 * @param {*} config
 */
const authority = config => {
    const exclude = get(config, "exclude");
    return async (ctx, next) => {
        let session = get(ctx, "session");
        const path = get(ctx, "path");
        if (exclude && exclude.test(path)) {
            await next();
            return;
        }

        if (!session) {
            ctx.body = resError(code.notLogin);
            return;
        }

        if (!get(session, "isLogin")) {
            ctx.body = resError(code.loginOutTime);
            return;
        }
        await next();
    };
};
module.exports = authority;
