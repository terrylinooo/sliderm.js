/**
 * Make sure all DOM have rendered already, then execute the callback function.
 *
 * @param {Function} callback The callback function.
 */
export function queue(callback, duration = 0) {
  setTimeout(() => {
    callback();
  }, duration);
}

export default queue;
