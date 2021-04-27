const mongoose = require('mongoose');

const geneSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        primaryProtein: {
            type: String,
            required: true
        },
        functions: {
            type: String,
            required: true
        },
        cleavageProteinDetails: {
            size: {
                type: Array,
            },
            name: {
                type: Array,
            },
            functions:{
                type: Array,
            }
        }
})


module.exports = mongoose.model('Gene', geneSchema);