const { get } = require("lodash");
/**
 * 生成成功的返回数据
 * @param {object} data
 * @param {number} status
 */
const resSuccess = (data, message = "ok") => ({
  status: 200,
  message,
  data
});

/**
 * 生成失败的返回数据
 * @param {string} message
 * @param {number} status
 */
const resFaild = (message = "error", status = 0) => ({
  status,
  message
});

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
  resFaild,
  queryObject
};
