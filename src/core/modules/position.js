/**
 * This is not a pre-loading module. It is used in module slide.js
 */
export default class Position {
  /**
   * Constructor.
   *
   * @param {Object} sliderm The Sliderm instacne.
   */
  constructor(sliderm) {
    this.sliderm = sliderm;
  }

  /**
   * Calculate the current pagination number.
   *
   * @param {...any} args The arguments.
   * @return {Number} The result pagination number.
   */
  calculate(...args) {
    const [direction, loop] = args;
    const columns = this.sliderm.getOption('columns');
    const isGrouping = this.sliderm.getOption('grouping');
    const itemCount = this.sliderm.getItemCount();
    const groupCount = this.sliderm.getGroupCount();
    const position = this.sliderm.getPosition();
    const unitCount = isGrouping ? groupCount : itemCount;
    let current = position;
    let result = 0;

    if (isGrouping) {
      const originalGroup = Math.ceil((position * columns) / columns);
      current = originalGroup;
    }

    if (typeof direction === 'number') {
      result = direction;
    } else if (direction === '>') {
      result = current + 1;
      if (result > unitCount && !loop) {
        result = 1;
      }
    } else if (direction === '<') {
      result = current - 1;
      if (result <= 0 && !loop) {
        result = unitCount;
      }
    }
    return result;
  }

  /**
   * Get pagination numbers.
   *
   * @return {Number}
   */
  maximum() {
    return this.sliderm.getOption('grouping')
      ? this.sliderm.getGroupCount()
      : this.sliderm.getItemCount();
  }
}
