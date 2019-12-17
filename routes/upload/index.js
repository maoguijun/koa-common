/*
 * @Author: maoguijun
 * @Date: 2019-12-17 13:09:29
 * @LastEditors: maoguijun
 * @LastEditTime: 2019-12-17 16:44:51
 * @FilePath: \koa-common\routes\upload\index.js
 */
const router = require("koa-router")();
const path = require("path");
const { uploadFile } = require("../../utils/upload");
const { resSuccess } = require("../../utils/format-res");

router.post("/", async (ctx, next) => {
  // 上传文件请求处理
  let result = { success: false };
  const now = new Date();

  const dataString = `${now.getFullYear()}/${now.getMonth() +
    1}/${now.getDate()}`;

  let serverFilePath = path.join(__dirname, `../../static/${dataString}`);

  // 上传文件事件
  result = await uploadFile(ctx, {
    fileType: "album",
    path: serverFilePath,
    dataString
  });
  ctx.body = resSuccess(result, "上传成功");
});

module.exports = router;
