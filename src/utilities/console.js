/**
 * Display the error message in the console.
 *
 * @param  {String} msg
 */
export function error(msg) {
  // eslint-disable-next-line no-console
  console.error(`[Sliderm] ${msg}`);
}

/**
 * For debug purpose, if necessary.
 *
 * @param  {String} msg
 */
export function debug(msg) {
  // eslint-disable-next-line no-console
  console.log(`[Sliderm] ${msg}`);
}
