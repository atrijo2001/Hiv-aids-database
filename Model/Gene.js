const mongoose = require('mongoose');

const geneSchema = new mongoose.Schema({
    gene: {
        name: {
            type: String,
            required: true
        },
        details: {
            
        }
    }
})