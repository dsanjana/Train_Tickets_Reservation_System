const mongoose = require('mongoose');
const Schema1 = mongoose.Schema;

// Define collection and schema for Employee
let Employee = new Schema1({
    name: {
        type: String
      },
    nic: {
        type: String
    }

}, {
        collection: 'employee'
    });

module.exports = mongoose.model('Employee', Employee);