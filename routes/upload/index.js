/*
 * @Author: maoguijun
 * @Date: 2019-12-17 13:09:29
 * @LastEditors  : maoguijun
 * @LastEditTime : 2019-12-20 15:33:04
 * @FilePath: \koa-common\routes\upload\index.js
 */
const router = require("koa-router")();
const fs = require("fs");
const path = require("path");
const { get } = require("lodash");
// const { uploadFile } = require("../../utils/upload");
const { resSuccess, resError } = require("../../utils/format-res");
const code = require("../../utils/code");
const { qiniuUpload, qiniuConfig } = require("../../utils/qiniuUpload");

const uploadFile = async file => {
    const fileName = get(file, "name");
    const reader = fs.createReadStream(file.path);
    const result = await qiniuUpload({
        reader,
        fileName,
    });
    return `${qiniuConfig.baseUrl}${get(result, ["respBody", "key"])}`;
};

router.post("/", async (ctx, next) => {
    // 上传文件请求处理

    // const now = new Date();

    // const dataString = `${now.getFullYear()}/${now.getMonth() +
    //     1}/${now.getDate()}`;

    // let serverFilePath = path.join(__dirname, `../../static/${dataString}`);

    // 上传文件事件
    // result = await uploadFile(ctx, {
    //   fileType: "album",
    //   path: serverFilePath,
    //   dataString
    // });
    // ctx.body = resSuccess(result, "上传成功");

    const file = get(ctx, "request.files.file");
    console.log(file);
    if (!file) {
        ctx.body = resError(code.uploadError);
        return;
    }
    // 判断是不是多文件
    const files = [];
    if (Array.isArray(file)) {
        for (f of file) {
            const fileUrl = await uploadFile(f);
            files.push(fileUrl);
        }
    } else {
        const fileUrl = await uploadFile(file);
        console.log(fileUrl);
        files.push(fileUrl);
    }
    ctx.body = resSuccess(files);
});

module.exports = router;
