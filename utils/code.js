/*
 * @Author: maoguijun
 * @Date: 2019-12-18 20:44:48
 * @LastEditors  : maoguijun
 * @LastEditTime : 2019-12-18 20:45:16
 * @FilePath: \koa-common\utils\code.js
 */
module.exports = {
    success: {
        code: 200,
        message: "ok",
    },
    notLogin: {
        code: 1001,
        message: "未登录",
    },

    loginOutTime: {
        code: 1002,
        message: "登录已过期",
    },
};
