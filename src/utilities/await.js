/**
 * Make sure all DOM have rendered already, then execute the callback function.
 *
 * @param {Function} callback The callback function.
 * @param {Number} duration The time to wait. (millisecond)
 * @return {Number} Timer ID
 */
export function queue(callback, duration = 0) {
  return setTimeout(() => {
    callback();
  }, duration);
}

/**
 * Loop an execution of the callback function.
 *
 * @param {Function} callback The callback function.
 * @param {Number} duration The time to wait. (millisecond)
 * @return {Number} Timer ID
 */
export function repeat(callback, duration = 5000) {
  return setInterval(() => {
    callback();
  }, duration);
}

/**
 * Cancel the setTnerval and setTimeout executions.
 *
 * @param {Number} timerId The timer ID
 */
export function stop(timerId) {
  clearInterval(timerId);
  clearTimeout(timerId);
}
