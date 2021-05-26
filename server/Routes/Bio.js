const express = require('express');

const {createModel, getAllResults, findByAccessionId, findByGeneSymbol} = require('../Controllers/Bio')
const router = express.Router();

router.post('/bio/createmodel', createModel);
router.get('/bio/getdetails', getAllResults)
router.get('/bio/getdetails/:accId', findByAccessionId)
router.get('/bio/getdetailsbygene/:geneid', findByGeneSymbol)

module.exports = router;