const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 5000;
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./DB.js');
const trainRoute = require('./train.route');
const employeeRoute = require('./employee.route');
const billRoute = require('./bill.route');
const mobilebillRoute=require('./mobilebill.route');
const userRoute=require('./user.route');


mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/train', trainRoute);
app.use('/employee', employeeRoute);
app.use('/bill', billRoute);
app.use('/mobilebill',mobilebillRoute);
app.use('/user',userRoute);



app.listen(PORT, function(){
  console.log('Server is running on Port:',PORT);
});