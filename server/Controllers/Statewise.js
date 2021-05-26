const Statewise = require('../Model/Statewise');



exports.createCases = async(req, res) => {
    const {state, cases, deaths} = req.body;

    try {
        const statewise = await Statewise.create({state, cases, deaths});

    
        res.status(200).json({
            message: "Successfully created a state",
            statewise
        })   
    } catch (error) {
        res.status(404).json({
            error,
            message: "Internal server error"
        });        
    }

}

exports.getCases = async(req, res) => {
    try {
    const cases = await Statewise.find({});
    res.status(200).json(cases);
    } catch (error) {
        res.status(404).json({message: "Internal Server eerror"})
    }
}

exports.getCasesByName = async(req, res) => {
    let name = req.params.name;
    name = name.charAt(0).toUpperCase() + name.slice(1);
    console.log(name)
    try {
        const cases = await Statewise.findOne({state: name}); 
        res.status(200).json(cases)
    } catch (error) {
        res.status(404).json({message: "Couldnt find state"})
    }
}

exports.getCasesDanger = async(req, res) => {
    try {
        const cases = await Statewise.find({deaths: {$gte: 35000}});
        res.status(200).json(cases)
    } catch (error) {
        res.status(404).json({message: "Couldnt find state"})
    }
}

exports.getCaseByStateId = async(req, res) => {
    try {
        const ById= await Statewise.findById(req.params.id).exec()
        res.status(200).json(ById)
    } catch (err) {
        res.status(404).json({message: "Couldnt find state"})
    }
}