/**
 * Generates a version 4 UUID (GUID).
 * A GUID is a globally unique identifier, commonly used to uniquely identify objects.
 *
 * @returns {string} A version 4 UUID string in the form of xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx.
 */
export const guid = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (char) => {
    const random = (Math.random() * 16) | 0;
    const value = char === 'x' ? random : (random & 0x3) | 0x8;
    return value.toString(16);
  });
};
