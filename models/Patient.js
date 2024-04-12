const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Patient extends Model {}

Patient.init(
  {
    patient_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    patient_name: {
      type: DataTypes.STRING
    },
    patient_guardian: {
      type: DataTypes.STRING
    },
    physical_address: {
      type: DataTypes.STRING
    },
    phone_number: {
      type: DataTypes.INTEGER
    },
    email_address: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'patient'
  }
);

module.exports = Patient;
