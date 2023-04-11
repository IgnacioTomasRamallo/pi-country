const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
    sequelize.define(
        "Activity",
        {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        difficulty: {
            type: DataTypes.ENUM({
            // Valores predefinidos para seleccionar
            values: ["1", "2", "3", "4", "5"],
            }),
        },
        duration: {
            type: DataTypes.INTEGER,
            defaultValue: "1",
        },
        season: {
            type: DataTypes.ENUM({
            values: ["Summer", "Fall", "Spring", "Winter"],
            }),
            },
        },
        { timestamps: false }
    );
};