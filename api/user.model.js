const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//define the collection and schema for trains

let User = new Schema({
    uname: {
        type: String
    },
    uemail: {
        type: String
    },
    upasswrd: {
        type: String
    },
    upass: {
        type: String
    },
    uadrss: {
        type: String
    }
},{
    collection: 'userDetails'
});

module.exports = mongoose.model('User', User);