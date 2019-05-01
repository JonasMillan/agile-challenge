'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  
  name: {
    type: String
  },
  acountMount: {
    type: Number
  },
  transactions: [{
    type: Schema.Types.ObjectId,
    ref: 'Transaction' 
  }]
});


module.exports = mongoose.model('User', UserSchema);