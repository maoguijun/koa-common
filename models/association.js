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


    models.book.belongsTo(models.book, {
        foreignKey: { name: "createdUsr"}
    });
    models.book.hasMany(models.book, {
        foreignKey: { name: "createdUsr" }
    });

    models.book.belongsTo(models.book, {
        foreignKey: { name: "updatedUsr" }
    });
    models.book.hasMany(models.book, {
        foreignKey: { name: "updatedUsr" }
    });
};
