const express = require('express');
const app = express();
const route = require('./routes/route');
const bodyParser = require('body-parser');
const create = require('./model/dbSetup');
const errorLogger = require('./utilities/errorLogger');
const requestLogger = require('./utilities/requestLogger');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(requestLogger);
app.use('/user', route);
app.use(errorLogger);

app.get("/user/setupDB", (req, res, next) => {
    create.setupDB().then(response => {
        if (response) res.json({ message: "Database Initialized Succeefully!!" })
    }).catch(error => {
        next(error);
    })
});

app.listen(3000);

console.log("Server started at 3000");