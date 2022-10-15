/**
 * A shorthand helper for document methods.
 */

/**
 * Check if an element exists or not.
 *
 * @param {String} selector The CSS selector for an element.
 * @return {Boolean}
 */
export function hasDom(selector) {
  try {
    const foundEl = document.querySelector(selector);
    return foundEl !== null;
  } catch (error) {
    return false;
  }
}

/**
 * Get an DOM element.
 *
 * @param {String} selector The CSS selector for an element.
 * @return {Null|Element}
 */
export function getDom(selector) {
  if (hasDom(selector)) {
    return document.querySelector(selector);
  }
  return null;
}

/**
 * Get an DOM element.
 *
 * @param {String} tag The HTML tag name.
 * @param {String} name The name of a CSS selector.
 * @return {Element}
 */
export function setDom(tag, name) {
  const node = document.createElement(tag);
  node.className = name;
  return node;
}

/**
 * Get an DOM element.
 *
 * @param {Element} parentDom The DOM element.
 * @param {String} selector The CSS selector for an element.
 * @return {Element|Null}
 */
export function findDom(parentDom, selector) {
  return parentDom.querySelector(selector);
}
