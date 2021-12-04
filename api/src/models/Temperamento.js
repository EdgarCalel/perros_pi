const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  // ID
  // Nombre
  sequelize.define('Temperamento', {
    ID: {
      type: DataTypes.UUID,
      allowNull: false,
      unique: true,
      primaryKey: true,
      defaultValue: DataTypes.UUID4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },{
    timestamps: false,
    createdAt: false,
    updatedAt: false
  });
};