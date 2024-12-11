require("dotenv").config()
const nodemailer = require('nodemailer');
const {transporter} = require('./transporter');

async function sendEmail(form) {
    const name = form.name.toString().toLowerCase().replace(/\s/g, '');
    const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: process.env.EMAIL_TO,
        subject: form.subject,
        text: `${form.name} - ${form.email}: ${form.message}`,
    };

    return await transporter.sendMail(mailOptions);
}

module.exports = {sendEmail};

