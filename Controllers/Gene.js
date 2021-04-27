const Gene = require('../Model/Gene');

exports.createGene = async(req, res) => {
    try {
        const gene = await Gene.create(req.body);
        res.status(200).json({
            message: "success",
            gene
        })
    } catch (err) {
        res.status(404).json(err)
    }
}

exports.getGenes = async(req, res) =>{
    try {
        const gene = await Gene.find(req.query)
        res.status(200).json({
            message: "success",
            gene
        })
    } catch (err) {
        res.status(404).json({
            message: "Couldnt get data",
            err
        })
    }
}

exports.getGeneById = async (req, res) => {
    const id = req.params.id
    try {
        const gene = await Gene.findById(id)
        res.status(200).json({
            gene
        })
    } catch (err) {
        res.status(404).json({
            message: "Didnt get any data",
            err
        })
    }
}