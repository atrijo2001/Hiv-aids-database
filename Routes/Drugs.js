const express = require('express');
const router = express.Router();
const {createDrug, getDrugById, getDrugs} = require('../Controllers/Drug')

router.route('/drug').get(getDrugs).post(createDrug);
router.get('/drug/:id', getDrugById);

module.exports = router;