const express = require('express');

const mobilebillRoutes = express.Router();


// Require MobileBill model in our routes module
let MobileBill = require('./mobilebill.model');


//Add Mobile payment details
mobilebillRoutes.route('/addmobilebill').post(function (req, res) {
    let mobilebill = new MobileBill(req.body);
    mobilebill.save()
        .then(mobilebill => {
            res.status(200).json({'mobilebill': 'MobileBill in added successfully'});
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});


//Get Mobile Payment details 
mobilebillRoutes.route('/getmobilebill').get(function (req, res) {
    

    MobileBill.findOne({}, {}, { sort: { '_id' : -1 } }, function (err, mobilebill){
        res.json(mobilebill);
    });
});

//update discount details
mobilebillRoutes.route('/updatemobilebill/:id').post(function (req, res) {
    MobileBill.findById(req.params.id, function(err, mobilebill) {
    if (!mobilebill)
      res.status(404).send("data is not found");
    else {
        mobilebill.payment = req.body.payment;



        mobilebill.save().then(mobilebill => {
          res.json('Update complete');

        })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
})


module.exports =mobilebillRoutes ;
