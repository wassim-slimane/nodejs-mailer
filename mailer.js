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
        from: process.env.EMAIL_FROM,
        to: process.env.EMAIL_TO,
        subject: form.subject,
        text: `${form.name} - ${form.email}: ${form.message}`,
    };

    return await transporter.sendMail(mailOptions);
}

module.exports = {sendEmail};

