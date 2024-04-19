const router = require('express').Router();
const { Appointments, Finances, Patient } = require('../../models');

// GET all Patients
router.get('/', async (req, res) => {
  try {
    const patientData = await Patient.findAll();
    res.status(200).json(patientData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single Patient
router.get('/:id', async (req, res) => {
  try {
    const patientData = await Patient.findByPk(req.params.id);

    if (!patientData) {
      res.status(404).json({ message: 'No patient found with this id!' });
      return;
    }

    res.status(200).json(patientData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a Patient
router.post('/', async (req, res) => {
  try {
    const patientData = await Patient.create(req.body);
    res.status(200).json(patientData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a Patient
router.delete('/:id', async (req, res) => {
  try {
    const patientData = await Patient.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!patientData) {
      res.status(404).json({ message: 'No patient found with this id!' });
      return;
    }

    res.status(200).json(patientData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
