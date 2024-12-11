const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const {sendEmail} = require("./mailer");
const {checkConnection} = require("./checkConnection");

// Constants
const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

// Routes
app.get('/', (req, res, next) => {
    res.send('Hello Wash!');
})

app.post('/check-connection', (req, res) => {
    checkConnection();
    res.status(200).send('OK');
})

app.post('/contact', (req, res) => {
    const form = req.body;

    // To-Do: Check form data to handle errors and send it to the front

    sendEmail(form).then((result) => res.send(result)).catch((err) => {
        console.log('err:', err);
        res.status(400).send(err.message);
    });
})

app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
})