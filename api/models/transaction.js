'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
    transactionType: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    effectiveDate: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model('Transaction', TransactionSchema);