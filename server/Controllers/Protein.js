const Protein = require('../Model/Protein');

exports.createProtein = async (req, res) =>{
    try {
        const protein = await Protein.create(req.body)
        res.status(200).json({
            message: "successfully created",
            data: protein
        })
    } catch (err) {
        res.status(404).json({
            message: "Couldnt insert protein",
            data: err
        })
    }
}

exports.getProtein = async(req, res) => {
    try {
        const protein = await Protein.find(req.query)
        res.status(200).json(protein)
    } catch (error) {
        res.status(404).json({
            message: "Couldnt get the data",
            err
        })
    }
}

exports.getProteinById = async(req, res) => {
    const id = req.params.id
    console.log(id)
    try {
        const protein = await Protein.findById(id);
        res.status(200).json(protein);
    } catch (error) {
        res.status(400).json({
            message: "Couldnt get data",
            error
        })
    }
}