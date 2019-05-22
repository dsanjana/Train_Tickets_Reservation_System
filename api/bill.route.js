const express = require('express');

const billRoutes = express.Router();


// Require Credit card bill
let Bill = require('./bill.model');

//add credit card payment details
billRoutes.route('/addbill').post(function (req, res) {
    let bill = new Bill(req.body);
    bill.save()
        .then(bill => {
            res.status(200).json({'business': 'business in added successfully'});
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});

//get credit card payment details
billRoutes.route('/getBill').get(function (req, res) {
    

    Bill.findOne({}, {}, { sort: { '_id' : -1 } }, function (err, bill){
        res.json(bill);
    });
});


//update credit card discount details
billRoutes.route('/updatebill/:id').post(function (req, res) {
    Bill.findById(req.params.id, function(err, bill) {
    if (!bill)
      res.status(404).send("data is not found");
    else {
        bill.payment = req.body.payment;



        bill.save().then(bill => {
          res.json('Update complete');

        })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
})


module.exports =billRoutes ;
