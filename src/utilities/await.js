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

/**
 * The async function wrapper.
 *
 * @param {Function} callback The callback function.
 * @param {Mixed}
 */
export async function wait(callback) {
  const result = await callback();
  return result;
}
