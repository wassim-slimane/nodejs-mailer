/**
 * Removes special characters from a string, keeping only alphanumeric characters, spaces, underscores and hyphens.
 * @param {string} str - The input string.
 * @returns {string} - The sanitized string.
 */
const removeSpecialCharacters = (str) => {
    return str.replace(/[^a-zA-Z0-9 _-]/g, '');
};

/**
 * Sanitizes and validates an email address.
 * Removes invalid characters and checks for a valid email format.
 *
 * @param {string} email - The email address to process.
 * @returns {string|null} - Returns the sanitized email if valid, or `null` if invalid.
 */
function sanitizeAndValidateEmail(email) {
    // Remove invalid characters
    const sanitizedEmail = email.trim().replace(/[^a-zA-Z0-9@._-]/g, '');

    // Regular expression to validate the email format
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Validate the sanitized email
    if (emailRegex.test(sanitizedEmail)) {
        return sanitizedEmail;
    } else {
        return null; // Invalid email
    }
}


module.exports = { removeSpecialCharacters, sanitizeAndValidateEmail};
