/**
 * A shorthand helper for document methods.
 */
const dom = {
  /**
   * Check if an element exists or not.
   *
   * @param {String} selector The CSS selector for an element.
   * @return {Boolean}
   */
  has(selector) {
    try {
      const foundEl = document.querySelector(selector);
      return foundEl !== null;
    } catch (error) {
      return false;
    }
  },

  /**
   * Get an DOM element.
   *
   * @param {String} selector The CSS selector for an element.
   * @return {Null|Element}
   */
  get(selector) {
    if (this.has(selector)) {
      return document.querySelector(selector);
    }
    return null;
  },

  /**
   * Get an DOM element.
   *
   * @param {String} tag The HTML tag name.
   * @param {String} name The name of a CSS selector.
   * @return {Element}
   */
  set(tag, name) {
    const node = document.createElement(tag);
    node.className = name.replace('.', '');
    return node;
  },

  /**
   * Get an DOM element.
   *
   * @param {Element} parentDom The DOM element.
   * @param {String} selector The CSS selector for an element.
   * @return {Element|Null}
   */
  find(parentDom, selector) {
    return parentDom.querySelector(selector);
  },
};

export default dom;
