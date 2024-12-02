const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");

// Constants
const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

// Routes
app.get('/', (req, res, next) => {
    res.send('Hello Wash!')
})
app.post('/contact', (req, res) => {
    console.log(req.body)
})

app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
})