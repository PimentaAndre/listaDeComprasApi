'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({

    name: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
    },
    superMarkets: [{

        id: {
            type: Number
        },
        name: {
            type: String,
            required: true
        }
    }]
    // category: [{
    //     type:String,
    //     required: true
    // }]
})

module.exports = mongoose.model('Product', schema);