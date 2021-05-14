const mongoose = require('mongoose');

const proteinSchema = new mongoose.Schema({
    pdbAccessionId: {
        type: String,
        required: true
    },
    structureDetails: {
        type: String,
        required: true
    },
    releaseDate: {
        type: Date
    },
    method: {
        type: String,
        required: true
    },
    organism: {
        type: String,
        required: true
    },
    macromolecules: {
        type: Array,
        required: true
    },
    uniqueLigands: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model('Protein', proteinSchema);