const express = require('express');

const router = express.Router();
const {createDetails, getDetails, getDetailsByState, alarmingDetails, getDetailsById} = require('../Controllers/Details')

router.post('/details/createdetails', createDetails);
router.get('/details/getdetails', getDetails);
router.get('/details/getdetails/:name', getDetailsByState);
router.get('/details/alarmingservices', alarmingDetails)
router.get('/details/:id', getDetailsById)

module.exports = router;