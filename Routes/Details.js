const express = require('express');

const router = express.Router();
const {createDetails, getDetails} = require('../Controllers/Details')

router.post('/details/createdetails', createDetails);
router.get('/details/getdetails', getDetails);

module.exports = router;