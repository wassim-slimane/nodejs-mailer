# Express Contact Form with Nodemailer

This project is an **Express.js** application integrated with **Nodemailer** to handle contact form submissions from a portfolio website. When a user fills out the contact form, their details are sent to your email.

---

## Features

- Handles form submissions securely.
- Sends an email to your inbox using **Nodemailer**.
- Validates input fields to ensure proper data handling.

---

## Getting Started

Follow these instructions to get the project running locally.

### Prerequisites

1. **Node.js**: Download and install from [nodejs.org](https://nodejs.org).
2. **npm**: Comes bundled with Node.js.
3. **A valid email account** for sending emails via SMTP.

---

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name

2. Install dependencies:
    ```bash
   npm install
   
3. Create a .env file in the root directory and configure the following variables:
   ```plaintext 
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_SECURE=false
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-email-password
   
    Replace the placeholders with your actual email configuration. For Gmail, use an App Password for EMAIL_PASS.
   
### Running the application

1. Start server
    ```bash
   npm start
   
2. By default, the app will run on http://localhost:3000.
