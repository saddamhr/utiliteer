/**
 * Checks if an object is empty.
 * Optionally, checks if all nested objects are empty when the deep option is enabled.
 *
 * @param {object} obj - The object to check.
 * @param {object} options - Optional settings.
 * @param {boolean} options.deep - If true, checks nested objects for emptiness.
 * @returns {boolean} - Returns true if the object (and optionally its nested objects) is empty, otherwise false.
 */
export const isEmptyObject = (obj, { deep = false } = {}) => {
  if (typeof obj !== 'object' || obj === null) {
    throw new TypeError('The input must be a non-null object.');
  }

  const isEmpty = (o) => Object.keys(o).length === 0;

  // If the object is empty at the top level
  if (isEmpty(obj)) {
    return true;
  }

  if (deep) {
    return Object.values(obj).every((value) => {
      if (typeof value === 'object' && value !== null) {
        return isEmptyObject(value, { deep });
      }
      return value === null; // Treat null values as "empty"
    });
  }

  return false;
};
