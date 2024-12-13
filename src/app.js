const express = require('express');
const cors = require('cors');
const {sendEmail} = require("./mailer");
const {checkConnection} = require("./checkConnection");
const {sanitizeForm} = require("../lib/formUtils");

// Constants
const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.urlencoded());
app.use(express.json());

app.use('/api/check-connection', (req, res, next) => {
    checkConnection().then(() => res.status(200).send('Connection Checked')).catch(next);
})

// Routes
app.post('/api/contact', (req, res, next) => {
    const form = req.body;
    const sanitizedForm = sanitizeForm(form);

    sendEmail(sanitizedForm).then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        res.status(400).send(err.message);
    });
})

app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
})