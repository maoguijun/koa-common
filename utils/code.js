/*
 * @Author: maoguijun
 * @Date: 2019-12-18 20:44:48
 * @LastEditors  : maoguijun
 * @LastEditTime : 2019-12-20 15:22:10
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
    registered: {
        code: 1003,
        message: "邮箱已经注册过",
    },
    loginError: {
        code: 1004,
        message: "账号或密码错误",
    },
    uploadError: {
        code: 1005,
        message: "上传失败",
    },
};
