const express = require('express');
const cors = require('cors');

// Constants
const app = express();
const port = 3000;

// Middleware
app.use(cors());

// Routes
app.get('/', (req, res, next) => {
    res.send('Hello Wash!')
})
app.post('/contact', (req, res) => {
    res.send('Got a POST request');
})

app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
})