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

async function sendEmail(form) {
    const name = form.name.toString().toLowerCase().replace(/\s/g, '');
    const mailOptions = {
        from: process.env.EMAIL_ADRESSE,
        to: process.env.EMAIL_ADRESSE,
        subject: form.subject,
        text: `${form.name} - ${form.email}: ${form.message}`,
    };

    return await transporter.sendMail(mailOptions);
}

// Verify smtp connection
function checkConnection() {
    transporter.verify(function(error, success) {
        if (error) {
            console.log('Connection error:' + error);
        } else {
            // Send the email
            //sendEmail().catch((error) => console.log(error));
        }
    })
}

module.exports = {sendEmail, checkConnection};

