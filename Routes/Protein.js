const express = require('express');

const router = express.Router();
const {createProtein, getProtein, getProteinById} = require('../Controllers/Protein')

router.post('/createprotein', createProtein);
router.get('/getprotein', getProtein);
router.get('/getproteinbyid/:id', getProteinById);

module.exports = router;