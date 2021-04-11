const mongoose = require('mongoose');

const StateWiseSchema = new mongoose.Schema({
    state:{
        type: String,
        required: true
    },
    cases: {
        type: Number,
        required: true
    },
    deaths: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('StateWise', StateWiseSchema);