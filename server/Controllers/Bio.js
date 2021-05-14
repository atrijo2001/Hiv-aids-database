const Bio = require('../Model/Bio');

exports.createModel = async(req, res) => {
    const {variation, gene, proteinChange,geneSymbol, conditions, clinicalSignificance, accessionId} = req.body;

    try {
        const biomodel = await Bio.create({variation, gene,geneSymbol, proteinChange, conditions, clinicalSignificance, accessionId})

        res.status(200).json({message: "successfully created", data: biomodel})
    } catch (error) {
        res.status(404).json({message: "Couldnt create"})
    }
}

exports.getAllResults = async(req, res) => {
    try {

        //Build Query
        const queryObj = {...req.query}
        const excludedFields = ['page', 'sort', 'limit', 'fields']
        excludedFields.forEach(el => delete queryObj[el])
        const query = Bio.find(queryObj)

        //ERxecute Query
        const biomodel = await query
        res.status(200).json(biomodel)
    } catch (error) {
        res.status(404).json({message: "Couldnt get data"})
    }
}

exports.findByAccessionId = async(req, res) => {
    const accId = req.params.accId;
    console.log(accId);
    try {
        const biomodel = await Bio.findOne({accessionId: accId});
        res.status(200).json(biomodel)
    } catch (error) {
        res.status(404).json({
            message: "Couldnt find with the given accession id",
            error
        })
    }
}

exports.findByGeneSymbol = async(req, res) => {
    const geneid = req.params.geneid;
    console.log(geneid);
    try {
        const biomodel = await Bio.find({geneSymbol: geneid})
        res.status(200).json(biomodel)
    } catch (error) {
        res.status(404).json({
            message: "Couldnt get the data the way you wanted to",
            error
        })
    }
}