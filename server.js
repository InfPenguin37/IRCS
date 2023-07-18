const express = require('express')
const app = express();
const expressLayouts = require('express-ejs-layouts')
const passport = require('passport')

const indexRouter = require('./routes/index')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

require('./passport')(passport)

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

const port = process.env.PORT;

app.listen(process.env.PORT || 3000)


// Express middleware to parse form data
app.use(express.urlencoded({ extended: false }));

app.post('/submit', (req, res) => {
    const formData = req.body;
    const fieldNames = Object.keys(formData);

    // Construct the SQL query dynamically
    const insertQuery = `INSERT INTO DataEntry (${fieldNames.join(', ')}) VALUES ?`;

    // Prepare the data to be inserted into the table
    const values = [fieldNames.map(fieldName => formData[fieldName])];

    // Insert form data into MySQL table
    connection.query(insertQuery, [values], (err, result) => {
        if (err) throw err;
        console.log('Form data inserted into the database!');
        res.send('Form submitted successfully!');
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});