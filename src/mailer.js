require("dotenv").config()
const fs = require('fs');
const handlebars = require('handlebars');

const {transporter} = require('./transporter');

async function sendEmail(form) {
    // Data for the template
    const context = {
        subject: form.subject,
        name: form.name,
        email: form.email,
        message: form.message,
    };

    // Generate html template to send with data
    const htmlSource = fs.readFileSync('./contact-form.html', 'utf-8');
    const htmlTemplate = handlebars.compile(htmlSource);
    const htmlToSend = htmlTemplate(context);

    // Set mail options
    const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: process.env.EMAIL_TO,
        subject: 'EMAIL FROM PORTFOLIO',
        text: `Subject: ${form.subject}, Name: ${name}, Email: ${form.email}, Message: ${form.message}`,
        html: htmlToSend
    };

    return await transporter.sendMail(mailOptions);
}

module.exports = {sendEmail};

