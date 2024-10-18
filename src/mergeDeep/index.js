/**
 * Merges two objects deeply
 * @param {Object} target
 * @param {Object} source
 * @returns {Object}
 */
export const mergeDeep = (target, source) => {
  if (typeof target !== 'object' || typeof source !== 'object') {
    return source;
  }

  for (const key in source) {
    if (source[key] instanceof Object) {
      if (!target[key]) Object.assign(target, { [key]: {} });
      mergeDeep(target[key], source[key]);
    } else {
      Object.assign(target, { [key]: source[key] });
    }
  }

  return target;
};
