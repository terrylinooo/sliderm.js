/**
 * Check whether a variable is numberic.
 *
 * @param {String} input Specify the variable to check.
 * @return {Boolean}
 */
export function isNumeric(input) {
  return !(
    Number.isNaN(Number(input)) || parseFloat(input).toString().length !== input.toString().length
  );
}

/**
 * Check whether a variable is integer.
 *
 * @param {String} input Specify the variable to check.
 * @return {Boolean}
 */
export function isInteger(input) {
  return Number.isFinite(input);
}
