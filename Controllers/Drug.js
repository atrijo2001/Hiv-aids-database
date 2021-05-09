const Drug = require('../Model/Drugs');

exports.createDrug = async(req, res) =>{
    try {
        const drug = await Drug.create(req.body);
        res.status(200).json(drug)
    } catch (err) {
        res.status(404).json({
            success: false,
            msg: "Couldnt create drug"
        })
    }
}

exports.getDrugs = async(req, res) =>{
    try {
        const drugs = await Drug.find(req.query);
        res.status(200).json(drugs)
    } catch (err) {
        res.status(404).json({
            success: false,
            msg: "Couldnt get drugs"
        })
    }
}

exports.getDrugById = async(req, res) =>{
    try {
        const drug = await Drug.findById(req.params.id)
        res.status(200).json(drug)
    } catch (err) {
        res.status(404).json({
            success: false,
            msg: "Couldnt get drugs"
        })
    }
}