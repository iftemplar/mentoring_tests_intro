/**
 * Calls moveCb conditionally based on give action
 * @param {Function} moveCallback
 * @param {String} action
 * @param {*} extras
 */
export const guardMove = (moveCallback, action, extras) => {
  if (["walk", "run"].includes(action)) {
    return moveCallback(action, extras);
  } else {
    console.error(`Invalid ${action}...`);
    return null;
  }
};
