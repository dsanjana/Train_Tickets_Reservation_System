const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Employee = new Schema({
    nic: {
        type: String
    }

}, {
        collection: 'employee'
    });

module.exports = mongoose.model('Employee', Employee);