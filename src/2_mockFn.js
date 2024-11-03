/**
 * Calls moveCb conditionally based on give action
 * @param {Function} moveCallback
 * @param {String} action
 * @param {*} extras
 */
const guardMove = (moveCallback, action, extras) => {
  console.log(`Calling ${action}`);

  if (["walk", "run"].includes(action)) {
    return moveCallback(action, extras);
  }

  console.error(`Invalid parameter ${action}...`);
  return null;
};

module.exports = guardMove;
