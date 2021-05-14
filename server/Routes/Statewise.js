const express = require('express');

const {getCases, getCasesByName, createCases, getCasesDanger} = require('../Controllers/Statewise')
const router = express.Router();

router.get('/getcases', getCases);
router.get('/getcases/:name', getCasesByName);
router.get('/getcasesdanger', getCasesDanger);
router.post('/createcases', createCases);

module.exports = router;
