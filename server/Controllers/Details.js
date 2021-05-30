const Details = require('../Model/Details');

exports.createDetails = async(req, res) => {
    const {state, adults, livingWithHivIn1000s, incidencesPer1000sUninfected, casesIn1000s,mortality, services} = req.body;

    try {
        const details = await Details.create({state, adults, livingWithHivIn1000s, incidencesPer1000sUninfected, casesIn1000s,mortality, services});

        res.status(200).json({
            message: "Successfully created",
            details
        })
    } catch (error) {
        res.status(404).json({message: "Couldnt create schema", error: error})
    }
}

exports.getDetails = async(req, res) => {
    try {
        const details = await Details.find({});
        res.status(200).json(
             details
        )
    } catch (error) {
        res.status(404).json({
            message: "Couldnt get the data",
            error: error
        })
    }
}

exports.getDetailsByState = async(req, res) => {
    let name = req.params.name;
    name = name.charAt(0).toUpperCase() + name.slice(1);
    console.log(name)
    try {
        const cases = await Details.findOne({state: name}); 
        res.status(200).json(cases)
    } catch (error) {
        res.status(404).json({message: "Couldnt find state"})
    }
}

exports.alarmingDetails = async(req, res) => {
    try {
        const cases = await Details.find({services: {$gte: 1.0}});
        res.status(200).json(cases)
    } catch (error) {
        res.status(404).json({message: "Couldnt find state"})
    }
}

exports.getDetailsById = async(req, res) => {
    try {
        const detail = await Details.findById(req.params.id).exec()
        res.status(200).json(detail)
    } catch (error) {
        res.status(404).json({message: "Couldnt find state"})
    }
}