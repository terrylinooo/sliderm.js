/**
 * For debug purpose, if necessary.
 *
 * @param  {String} msg
 */
export function log(msg) {
  // eslint-disable-next-line no-console
  console.error(`[Sliderm] ${msg}`);
}

export function debug(...args) {
  // eslint-disable-next-line no-console
  console.log(`[Sliderm] ${args.toString()}`);
}
