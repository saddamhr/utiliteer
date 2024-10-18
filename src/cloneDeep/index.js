/**
 * Deep clone an object
 * @param {Object} obj
 * @returns {Object}
 */
export const cloneDeep = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};
