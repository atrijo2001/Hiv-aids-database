const mongoose = require('mongoose');

const DetailsSchema = new mongoose.Schema({
    state: {
        type: String,
        required: true
    },
    adults: {
        male: {
            type: String,
            required: true
        },
        female: {
            type: String,
            required: true
        }
    },
    livingWithHivIn1000s: {
        male: {
            type: String,
            required: true
        },
        female: {
            type: String,
            required: true
        },
        children : {
            type: String,
            required: true
        }
    },
    incidencesPer1000sUninfected: {
        male: {
            type: String,
            required: true
        },
        female: {
            type: String,
            required: true
        }
    },
    casesIn1000s: {
        male: {
            type: String,
            required: true
        },
        female: {
            type: String,
            required: true
        },
        children : {
            type: String,
            required: true
        }
    },
    mortality: {
        male: {
            type: String,
            required: true
        },
        female: {
            type: String,
            required: true
        },
        children : {
            type: String,
            required: true
        }
    },
    services: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Details', DetailsSchema);