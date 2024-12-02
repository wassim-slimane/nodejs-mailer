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

// Configure the mailoptions object
const mailOptions = {
    from: 'washimmer@gmail.com',
    to: 'thiampapemoussajr@gmail.com',
    subject: 'Wagwan bruv',
    text: 'Quick message to tell you that Im currently working on the email feature and the first try works !!! Imma keep you in touch of my progress, aight'
};

async function sendMail() {
    const response = await transporter.sendMail(mailOptions);
    response.accepted ? console.log(response.accepted) : console.log(response.rejected);
}

// Verify smtp connection
transporter.verify(function(error, success) {
    if (error) {
        console.log('Connection error:' + error);
    } else {
        console.log('Successfully verified, Ready to send email');
        // Send the email
        sendMail().catch((error) => console.log(error));
    }
});

