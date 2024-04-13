const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Finances extends Model {}

Finances.init(
  {
    finances_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    patient_name: {
      type: DataTypes.STRING
    },
    number_of_appointments: {
      type: DataTypes.INTEGER
    },
    total_charges: {
      type: DataTypes.DECIMAL
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'finances'
  }
);

module.exports = Finances;
