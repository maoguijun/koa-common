const Sequelize = require("sequelize");

module.exports = sequelize => {
    const account = sequelize.define(
        "account",
        {
            id: { type: Sequelize.STRING, primaryKey: true }, // 唯一ID，域账户用户名
            name: { type: Sequelize.STRING, allowNull: false }, // 姓名，
            password: { type: Sequelize.STRING, allowNull: false }, // 密码，
            title: { type: Sequelize.STRING }, // 职位，
            mail: { type: Sequelize.STRING }, // 邮箱，
            telephoneNumber: { type: Sequelize.STRING }, // 分机号，
            status: {
                type: Sequelize.INTEGER,
                defaultValue: 1,
                readOnly: true
            }, // 状态，1：存在；0：删除
            remark: { type: Sequelize.STRING } // 备注，
        },
        {
            freezeTableName: true,
            indexes: [
                { method: "BTREE", fields: ["name"] },
                { method: "BTREE", fields: ["title"] },
                { method: "BTREE", fields: ["status"] }
            ],
            description: "用户"
        }
    );
};
