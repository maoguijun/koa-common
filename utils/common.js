const crypto = require("crypto");

/**
 * sha256 加密
 * @param {string} data
 */
const sha256 = (data = "") =>
    crypto
        .createHash("sha256")
        .update(data)
        .digest("hex");

module.exports = {
    sha256,
};
