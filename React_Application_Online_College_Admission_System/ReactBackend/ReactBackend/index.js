const express = require('express');
const mongoose = require('mongoose')
const app = express();

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json()); // Parse incoming JSON data


const cors = require('cors')
app.use(cors())

//controllers
const FORMS = require('./controllers/applicationForm')
const AUTHENTICATION = require('./controllers/authentication')
const ADMIN = require('./controllers/admin')

// const LOGIN = require('./controllers/login')
// app.use('/', LOGIN)
app.use('/college', FORMS)
app.use('/auth', AUTHENTICATION)
app.use('/admin', ADMIN)





//mongodb connection

mongoose.connect('mongodb://127.0.0.1:27017/collegeAdmission')
  .then(() => console.log('Connected!'))




const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

