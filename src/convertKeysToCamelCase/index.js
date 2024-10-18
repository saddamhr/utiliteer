/**
 * Converts a string from snake_case to camelCase.
 * @param {string} str - The string to convert.
 * @returns {string} - The converted camelCase string.
 */
const toCamelCase = (str) => {
  return str
    .split('_')
    .map((word, index) => {
      // Capitalize the first letter of each word except the first one
      if (index === 0) {
        return word;
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join('');
};

/**
 * Converts an object with snake_case keys to camelCase keys.
 * Handles nested objects as well.
 * @param {object} obj - The object to convert.
 * @returns {object} - A new object with camelCase keys.
 */
export const convertKeysToCamelCase = (obj) => {
  return Object.keys(obj).reduce((acc, key) => {
    const camelCaseKey = toCamelCase(key);
    const value = obj[key];

    // Recursively convert nested objects
    acc[camelCaseKey] =
      value && typeof value === 'object' && !Array.isArray(value)
        ? convertKeysToCamelCase(value)
        : value;

    return acc;
  }, {});
};
