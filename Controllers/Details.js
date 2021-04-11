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
        res.status(200).json({
            message: "The data successfully fetched",
            data: details
        })
    } catch (error) {
        res.status(404).json({
            message: "Couldnt get the data",
            error: error
        })
    }
}