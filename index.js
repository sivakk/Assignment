var express = require('express');
var mongodb = require('mongoose');
var cors = require('cors');
var bodyparser = require('body-parser');

const route = require('./route/route.js');

var app = express();

mongodb.connect('mongodb://localhost:27017/persons');

mongodb.connection.on('connected', () => {
    console.log('connected to mongo db');
});

mongodb.connection.on('error', (err) => {
    console.log('err');
});

app.get('/', (req, res) => {
    res.send('hai');

})


app.use(cors());
app.use(bodyparser.json());
app.use('/api', route);


app.listen(3000, () => {
    console.log("server listen on port 3000 ")
})