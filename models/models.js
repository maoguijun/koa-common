/*
 * @Author: maoguijun
 * @Date: 2019-12-17 13:09:29
 * @LastEditors  : maoguijun
 * @LastEditTime : 2019-12-18 21:20:42
 * @FilePath: \koa-common\models\models.js
 */
const Sequelize = require("sequelize");

module.exports = sequelize => {
    const account = sequelize.define(
        "account",
        {
            id: {
                type: Sequelize.UUID,
                primaryKey: true,
                defaultValue: Sequelize.UUIDV4,
            }, // 唯一ID，域账户用户名
            nickname: { type: Sequelize.STRING, allowNull: false }, // 姓名，
            password: { type: Sequelize.STRING, allowNull: false }, // 密码，
            mail: { type: Sequelize.STRING }, // 邮箱，
            telephoneNumber: { type: Sequelize.STRING }, // 分机号，
            status: {
                type: Sequelize.INTEGER,
                defaultValue: 1,
                readOnly: true,
            }, // 状态，1：存在；0：删除
            remark: { type: Sequelize.STRING }, // 备注，
        },
        {
            freezeTableName: true,
            indexes: [
                { method: "BTREE", fields: ["nickname"] },
                { method: "BTREE", fields: ["status"] },
            ],
            description: "用户",
        }
    );

    const book = sequelize.define(
        "book",
        {
            id: {
                type: Sequelize.UUID,
                primaryKey: true,
                defaultValue: Sequelize.UUIDV4,
            }, // 唯一ID，域账户用户名
            name: { type: Sequelize.STRING, allowNull: false }, // 姓名，
            // author: { type: Sequelize.ARRAY(Sequelize.STRING), allowNull: false },
            status: {
                type: Sequelize.INTEGER,
                defaultValue: 1,
                readOnly: true,
            }, // 状态，1：存在；0：删除
            description: { type: Sequelize.TEXT }, // 备注，
            owner: { type: Sequelize.UUID },
            createdUsr: { type: Sequelize.UUID },
            updateUsr: { type: Sequelize.UUID },
        },
        {
            freezeTableName: true,
            indexes: [
                { method: "BTREE", fields: ["name"] },
                { method: "BTREE", fields: ["status"] },
            ],
            description: "书籍",
        }
    );
};
