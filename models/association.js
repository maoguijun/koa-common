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
