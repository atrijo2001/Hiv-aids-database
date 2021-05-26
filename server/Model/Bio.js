const mongoose = require('mongoose');

const BioSchema = new mongoose.Schema({
    variation: {
        clinVarLink: {
            type: String,
            unique: true
        },
        varId: {
            type: String,
            unique: true
        }
    },
    gene: {
        symbol: {
            type: String
        },
        fullName: {
            type: String
        },
        geneType: {
            type: String
        },
        fastaLink: {
            type: String
        }
    },
    geneSymbol:{
        type: String
    },
    proteinChange: {
        type: String
    },
    conditions: {
        type: String
    },
    clinicalSignificance: {
        type: String
    },
    accessionId: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Bio', BioSchema);