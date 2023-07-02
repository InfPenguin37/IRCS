const express = require('express')
const app = express();
const expressLayouts = require('express-ejs-layouts')

const indexRouter = require('./routes/index')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

const mysql = require('mysql')
    // MySQL database connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'ps',
    password: 'password',
    database: 'fdrs'
});
connection.connect(function(err) {
    if (err) throw err;
    console.log('Connected to the FDRS database!');
});

// Express middleware to parse form data
app.use(express.urlencoded({ extended: true }));


app.use('/', indexRouter)

app.listen(process.env.PORT || 3000)