/**
 * Formats a number with optional locale and precision.
 *
 * @param {number} number - The number to format.
 * @param {object} [options={}] - Formatting options.
 * @param {string} [options.locale='en-US'] - The locale for formatting (e.g., 'en-US' or 'de-DE').
 * @param {number} [options.decimals=0] - The number of decimal places to include.
 * @param {boolean} [options.useGrouping=true] - Whether to use thousands separators.
 * @returns {string} The formatted number as a string.
 */
export const formatNumber = (
  number,
  { locale = 'en-US', decimals = 0, useGrouping = true } = {},
) => {
  if (typeof number !== 'number') {
    throw new TypeError('The input must be a number.');
  }

  return number.toLocaleString(locale, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
    useGrouping: useGrouping,
  });
};
