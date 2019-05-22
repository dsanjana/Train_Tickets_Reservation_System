const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Train = new Schema({
  tno: {
    type: String
  },
  tname: {
    type: String
  },
  sstation: {
    type: String
  },

  estation: {
    type: String
  },
  stime: {
    type: String
  },
  etime: {
    type: String
  },

      type: {
        type: String
      },
      frequency: {
        type: String
      },

      from: {
        type: String
      },
      to:{
        type:String
      },
      
      qty: {
        type: String
      },

      price: {
        type: String
      }
},

    {
    collection: 'train'
});

module.exports = mongoose.model('Train', Train);