require("dotenv").config()
const {transporter} = require('./transporter');

// Verify smtp connection
async function checkConnection() {
    return new Promise((resolve, reject) => {
        transporter.verify((error, success) => {
            if (error) {
                reject(error); // Reject the promise with the error
            } else {
                resolve(success); // Resolve the promise with the success
            }
        });
    });
}

module.exports = {checkConnection};