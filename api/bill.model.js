const mongoose = require('mongoose');
const Schema2 = mongoose.Schema;

// Define collection and schema for Business
let Bill = new Schema2({

        email:{

            type:String
        },
        fullname:{
            type:String

        },

        nic: {
            type: String
        },
        cvc:{
            type:Number
        },
        cardno:{
            type:String
        },
        expiredate:{
            type:String
        },

        qty: {
            type: Number
        },

        payment:{
            type:Number
        }
    },

    {
        collection: 'bill'
    });

module.exports = mongoose.model('Bill', Bill);