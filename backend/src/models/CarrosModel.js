module.exports = (sequelize, DataTypes) => {
  const Carro = sequelize.define('Carro', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nome: DataTypes.STRING,
    marca: DataTypes.STRING,
    anoFabricacao: DataTypes.DATE,
    descricao: DataTypes.STRING,
    donoId: { type: DataTypes.INTEGER, foreignKey: true },

  },
    {
      timestamps: false,
      tableName: 'carros',
      underscored: true,
    });

  return Carro;
};