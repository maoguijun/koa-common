/*
 * @Author: maoguijun
 * @Date: 2019-12-17 14:15:29
 * @LastEditors  : maoguijun
 * @LastEditTime : 2019-12-18 21:13:08
 * @FilePath: \koa-common\utils\format-res.js
 */
const { get } = require("lodash");
const code = require("./code");
/**
 * 生成成功的返回数据
 * @param {object} data
 * @param {number} status
 */
const resSuccess = data => ({
    ...code.success,
    data,
});

/**
 * 生成失败的返回数据
 * @param {string} message
 * @param {number} status
 */
const resError = code => code;

/**
 * 去除不必要的字段
 * @param {object} data
 * @param {array} keys
 */
const queryObject = (data = {}, keys = []) => {
    let objKeys = Object.keys(data);
    objKeys = objKeys.filter(key => !keys.includes(key));

    const result = {};
    objKeys.forEach(key => {
        result[key] = data[key];
    });

    return result;
};

module.exports = {
    resSuccess,
    resError,
    queryObject,
};
