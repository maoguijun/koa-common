/*
 * @Author: maoguijun
 * @Date: 2019-12-17 13:09:29
 * @LastEditors  : maoguijun
 * @LastEditTime : 2019-12-18 21:23:07
 * @FilePath: \koa-common\models\association.js
 */
module.exports = models => {
    models.account.belongsTo(models.account, {
        foreignKey: { name: "createdUsr", readOnly: true }
    });
    models.account.hasMany(models.account, {
        foreignKey: { name: "createdUsr", readOnly: true }
    });

    models.account.belongsTo(models.account, {
        foreignKey: { name: "updatedUsr", readOnly: true }
    });
    models.account.hasMany(models.account, {
        foreignKey: { name: "updatedUsr", readOnly: true }
    });
};
