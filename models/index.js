const Patient = require('/Patient');
const Finances = require('./Finances');
const Appointments = require('./Appointments');

Patient.hasMany(Appointments, {
  foreignKey: 'appointment_id',
});

Patient.hasMany(Finances, {
    foreignKey: 'financial_id',
  });

Finances.belongsTo(Patient, {
    foreignKey: 'patient_id',
  });

Appointments.belongsTo(Patient, {
  foreignKey: 'patient_id',
});

module.exports = { Patient, Finances, Appointments };
