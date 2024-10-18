/**
 * Removes all falsy values from an array.
 * Falsy values: false, null, 0, "", undefined, and NaN.
 * @param {Array} array
 * @returns {Array}
 */
export const compact = (array) => {
  return array.filter(Boolean);
}