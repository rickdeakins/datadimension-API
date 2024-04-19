const router = require('express').Router();
const { Appointments, Finances, Patient } = require('../../models');

// GET all Finances
router.get('/', async (req, res) => {
  try {
    const financeData = await Finances.findAll();
    res.status(200).json(financeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single Finance
router.get('/:id', async (req, res) => {
  try {
    const financeData = await Finances.findByPk(req.params.id);

    if (!financeData) {
      res.status(404).json({ message: 'No finances found with this id!' });
      return;
    }

    res.status(200).json(financeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a Finance
router.post('/', async (req, res) => {
  try {
    const financeData = await Finances.create(req.body);
    res.status(200).json(financeData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a Finance
router.delete('/:id', async (req, res) => {
  try {
    const financeData = await Finance.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!financeData) {
      res.status(404).json({ message: 'No patient found with this id!' });
      return;
    }

    res.status(200).json(financeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
