import { isInteger } from '../../utilities/number';

/**
 * Get the bold style of the arrow buttons.
 *
 * @param {String} arg The bold type.
 * @return {String}
 */
export const bold = (arg) => {
  const boldTypes = {
    1: 'thin',
    2: 'regular', // default
    3: 'bold',
  };
  return boldTypes[arg] !== undefined ? boldTypes[arg] : 'regular';
};

/**
 * Get the shape of the arrow buttons.
 *
 * @param {String} arg The shape type.
 * @return {String}
 */
export const shape = (arg) => {
  if (arg === 'none' || arg === 'square') {
    return arg;
  }
  return 'circle'; // default
};

/**
 * Get the font size of the arrow buttons.
 *
 * @param {String} arg The font size.
 * @return {Number|Null}
 */
export const size = (arg) => {
  if (!isInteger(arg) || arg === 16) {
    return null;
  }
  if (arg <= 13) {
    return 13;
  }
  if (arg >= 28) {
    return 28;
  }
  return arg;
};

/**
 * Get the background color.
 *
 * @param {String} color The hex color code.
 * @return {String}
 */
export const bgColor = (arg) => {
  if (arg !== '#000000') {
    return arg;
  }
  return null;
};

/**
 * Get the font color.
 *
 * @param {String} color The hex color code.
 * @return {String}
 */
export const color = (arg) => {
  if (arg !== '#ffffff') {
    return arg;
  }
  return null;
};

/**
 * Get the font color.
 *
 * @param {Number} arg The hex color code.
 * @return {Number|Null}
 */
export const opacity = (arg) => {
  if (!isInteger(arg) || arg > 1 || arg < 0.1 || arg === 0.5) {
    return null;
  }
  return arg;
};
