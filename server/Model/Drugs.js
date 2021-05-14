const mongoose = require("mongoose");

const drugSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter the name of the drug']
    },
    target:{
        type: String,
        required: [true, 'Please enter the mode of action of thedrug']
    },
    uses:{
        type: String
    },
    sideEffects:{
        type: String
    },
    precautions:{
        type: String
    },
    interactions: {
        type: String
    },
    pubMedLink:{
        type: Array,
        required:[true, 'Please enter a pubmed link']
    }
})

module.exports = mongoose.model('Drug', drugSchema);