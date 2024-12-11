require("dotenv").config()
const nodemailer = require('nodemailer');
const {transporter} = require('./transporter');

async function sendEmail(form) {
    const name = form.name.toString().toLowerCase().replace(/\s/g, '');
    const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: process.env.EMAIL_TO,
        subject: 'EMAIL FROM PORTFOLIO',
        text: `Subject: ${form.subject}, Name: ${name}, Email: ${form.email}, Message: ${form.message}`,
    };

    return await transporter.sendMail(mailOptions);
}

module.exports = {sendEmail};

