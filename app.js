const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const {sendEmail} = require("./mailer");
const {checkConnection} = require("./checkConnection");
const {sanitizeForm} = require("./lib/formUtils");

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
    const sanitizedForm = sanitizeForm(form);

    sendEmail(sanitizedForm).then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        res.status(401).send(err.message);
    });
})

app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
})