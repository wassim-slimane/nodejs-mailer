require("dotenv").config()
const {transporter} = require('./transporter');

// Verify smtp connection
function checkConnection() {
    transporter.verify(function(error, success) {
        if (error) {
            console.log('Connection error: ' + error);
        } else {
            console.log(success);
        }
    })
}

module.exports = {checkConnection};