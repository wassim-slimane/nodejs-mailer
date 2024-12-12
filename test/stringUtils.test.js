const { removeSpecialCharacters } = require('../lib/stringUtils');

test('should remove special characters and keep alphanumeric characters and spaces', () => {
    const input = 'Hello, World! @2024 🚀';
    const expected = 'Hello World 2024';
    expect(removeSpecialCharacters(input)).toBe(expected);
});
