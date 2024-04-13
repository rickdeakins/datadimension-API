const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Appointments extends Model {}

Appointments.init(
  {
    appointments_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    appointment_date: {
      type: DataTypes.DATE
    },
    appointment_rate: {
      type: DataTypes.DECIMAL
    },
    mileage_fee: {
      type: DataTypes.DECIMAL
    },
    comments: {
        type: DataTypes.STRING
      }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'appointments'
  }
);

module.exports = Appointments;