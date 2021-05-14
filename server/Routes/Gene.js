const express = require('express');

const router = express.Router();

const {createGene, getGeneById, getGenes} = require('../Controllers/Gene')

router.post('/creategene', createGene);
router.get('/getgene/:id', getGeneById);
router.get('/getgenes', getGenes);

module.exports = router;