/**
 * Async function, resolves if password is truthy
 * @param {String} password
 */
export async function validatePasswordApi(password) {
  return Promise.resolve(!!password);
}

/**
 * Return a random number between min and max
 * @param {Number} min
 * @param {Number} max
 */
export function randomizer(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
