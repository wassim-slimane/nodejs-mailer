const {removeSpecialCharacters, sanitizeAndValidateEmail} = require('./stringUtils');

/**
 * Sanitizes and validates the fields of a form object.
 * Each field is processed according to its specific requirements:
 * - `subject`, `name`, and `message` are sanitized to remove special characters.
 * - `email` is sanitized and validated to ensure it is a properly formatted email address.
 *
 * @param {Object} form - The form object containing fields to sanitize.
 * @param {string} form.subject - The subject field of the form.
 * @param {string} form.email - The email field of the form.
 * @param {string} form.name - The name field of the form.
 * @param {string} form.message - The message field of the form.
 * @returns {Object} - A new object with sanitized and validated form fields.
 */
const sanitizeForm = (form) => {
    return {
        subject: removeSpecialCharacters(form.subject),
        email: sanitizeAndValidateEmail(form.email),
        name: removeSpecialCharacters(form.name),
        message: removeSpecialCharacters(form.message)
    };
};

module.exports = {sanitizeForm}