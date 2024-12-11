require("dotenv").config()
const nodemailer = require('nodemailer');

// Create a transporter object
const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    secure: process.env.EMAIL_SECURE === 'true', // use SSL
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// Verify smtp connection
function checkConnection() {
    transporter.verify(function(error, success) {
        if (error) {
            console.log('Connection error: ' + error);
        } else {
            console.log(success);
            //sendEmail().catch((error) => console.log(error));
        }
    })
}

//checkConnection(transporter);
module.exports = {checkConnection};