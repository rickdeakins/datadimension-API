const router = require('express').Router();
const { Appointments, Finances, Patient } = require('../../models');

// GET all Appointments
router.get('/', async (req, res) => {
  try {
    const appointmentData = await Appointments.findAll();
    res.status(200).json(appointmentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single Appointment
router.get('/:id', async (req, res) => {
  try {
    const appointmentData = await Appointments.findByPk(req.params.id);

    if (!appointmentData) {
      res.status(404).json({ message: 'No appointments found with this id!' });
      return;
    }

    res.status(200).json(appointmentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE an Appointment
router.post('/', async (req, res) => {
  try {
    const appointmentData = await Appointments.create(req.body);
    res.status(200).json(appointmentData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE an Appointment
router.delete('/:id', async (req, res) => {
  try {
    const appointmentData = await Appointments.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!appointmentData) {
      res.status(404).json({ message: 'No appointment found with this id!' });
      return;
    }

    res.status(200).json(appointmentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
