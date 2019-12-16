const router = require("koa-router")();
const path = require("path");
const { uploadFile } = require("../utils/upload");
router.post("/", async (ctx, next) => {
    // 上传文件请求处理
    let result = { success: false };
    let serverFilePath = path.join(__dirname, "../static/image");

    // 上传文件事件
    result = await uploadFile(ctx, {
        fileType: "album",
        path: serverFilePath
    });
    ctx.body = result;
});

module.exports = router;
