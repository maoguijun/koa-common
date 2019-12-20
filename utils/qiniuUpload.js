/*
 * @Author: maoguijun
 * @Date: 2019-12-20 13:13:10
 * @LastEditors  : maoguijun
 * @LastEditTime : 2019-12-20 15:19:57
 * @FilePath: \koa-common\routes\users\qiniuUpload.js
 */

const qiniuConfig = {
    bucket: "ourbook", //要上传的空间
    accessKey: "q9d8ku3FUs3QSlZR8n3AGNqgepwj5IfY_aAGN6z8",
    secretKey: "vcrzR-nJEQqWwrV-X6cikn7t-ToU6ys8azXb264r",
    baseUrl: "http://q2pxitjuk.bkt.clouddn.com/",
};

const qiniu = require("qiniu");
const config = new qiniu.conf.Config();
const formUploader = new qiniu.form_up.FormUploader(config);
const putExtra = new qiniu.form_up.PutExtra();

const mac = new qiniu.auth.digest.Mac(
    qiniuConfig.accessKey,
    qiniuConfig.secretKey
);

// 生成uploadToken
var options = {
    scope: qiniuConfig.bucket,
    //将多个数据处理指令拼接起来
    // persistentOps: avthumbMp4Fop + ";" + vframeJpgFop,
    // //数据处理队列名称，必填
    // persistentPipeline: "video-pipe",
    // //数据处理完成结果通知地址
    // persistentNotifyUrl: "http://api.example.com/qiniu/pfop/notify",
};

var putPolicy = new qiniu.rs.PutPolicy(options);
var uploadToken = putPolicy.uploadToken(mac);

const qiniuUpload = ({ reader, fileName }) => {
    return new Promise((resolve, reject) => {
        formUploader.putStream(
            uploadToken, // 上传token
            fileName, // 文件名
            reader, // 文件流
            putExtra, //
            function(respErr, respBody, respInfo) {
                if (respErr) {
                    reject(respErr);
                }
                if (respInfo.statusCode == 200) {
                    resolve({
                        respBody,
                        respInfo,
                    });
                } else {
                    resolve({
                        respBody,
                        respInfo,
                    });
                }
            }
        );
    });
};

module.exports = { qiniuUpload, qiniuConfig };
