const express = require('express');
const employeeRoutes = express.Router();

// Require Employee model in our routes module
let Employee = require('./employee.model');

// Add Employee
employeeRoutes.route('/addEmp').post(function (req, res) {
    let employee = new Employee(req.body);
    employee.save()
        .then(employee => {
            res.status(200).json({'employee': 'Employee in added successfully'});
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});

//Get Employee
employeeRoutes.route('/getEmp/:id').get(function (req, res) {
    // let sstation1= req.params.sstation;

    Employee.findOne({nic:req.params.id}, function (err, employee){
        res.json(employee);
    });
});
module.exports =employeeRoutes ;
