const express = require("express");
const path = require("path");
const app = express();
const mysql = require('mysql');
var bodyParser = require('body-parser');
const exphbs = require("express-handlebars");


// connection configurations
var dbConn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test'
});
// connect to database
dbConn.connect(); 


// Index page Route
app.get('/', (req, res) =>{
  res.render('index', { title: 'PhoneBook'})
  // res.send("Hello world")
});


// Retrieve all users 
app.get('/contacts', function (req, res) {
  dbConn.query('SELECT * FROM contacts', function (error, results, fields) {
      if (error) throw error;
      return res.send({ error: false, data: results, message: 'Contact list.' });
  });
});


module.exports = app