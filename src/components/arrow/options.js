/**
 * Get the bold style of the arrow buttons.
 *
 * @param {String} bold The bold type.
 * @return {String}
 */
export const bold = (bold) => {
  const boldTypes = {
    1: 'thin',
    2: 'regular', // default
    3: 'bold',
  };
  return boldTypes[bold] !== undefined ? boldTypes[bold] : 'regular';
};
  
/**
 * Get the shape of the arrow buttons.
 *
 * @param {String} bold The shape type.
 * @return {String}
 */
export const shape = (shape) => {
  if (shape === 'none' || shape === 'square') {
    return shape;
  }
  return 'circle';  // default
};

/**
 * Get the font size of the arrow buttons.
 *
 * @param {String} size The font size.
 * @return {Number|Null}
 */
export const size = (size) => {
  if (Number(size) === NaN || size === 16) {
    return null;
  }
  if (size <= 13) {
    return 13;
  }
  if (size >= 28) {
    return 28;
  }
  return size;
};

/**
 * Get the background color.
 *
 * @param {String} color The hex color code.
 * @return {String}
 */
export const bgColor = (color) => {
  if (color !== '#000000') {
    return color;
  }
  return null;
}

/**
 * Get the font color.
 *
 * @param {String} color The hex color code.
 * @return {String}
 */
export const color = (color) => {
  if (color !== '#ffffff') {
    return color;
  }
  return null;
}

/**
 * Get the font color.
 *
 * @param {Number} color The hex color code.
 * @return {Number|Null}
 */
export const opacity = (opacity) => {
  if (Number(opacity) === NaN || opacity > 1 || opacity < 0.1 || opacity === 0.5) {
    return null;
  }
  return opacity;
}
