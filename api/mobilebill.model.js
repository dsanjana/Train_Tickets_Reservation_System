const mongoose = require('mongoose');
const Schema3 = mongoose.Schema;

// Define collection and schema for MobileBill
let MobileBill = new Schema3({

        number:{

            type:Number
        },
        pin:{
            type:String

        },
        qty:{
            type:Number

        },
        nic:{
            type:Number
        },
        email:{
            type:String
        },

        payment: {
            type: Number
        }
        
    },

    {
        collection: 'mobilebill'
    });

module.exports = mongoose.model('MobileBill', MobileBill);