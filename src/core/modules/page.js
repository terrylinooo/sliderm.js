/**
 * Calculate the current page number and the maximum page number.
 */
export default class Page {
  /**
   * Constructor.
   *
   * @param {Object} sliderm The Sliderm instacne.
   */
  constructor(sliderm) {
    this.sliderm = sliderm;
  }

  /**
   * Calculate what the pagination number will be.
   *
   * @param {...any} args The arguments.
   * @return {Number} The result pagination number.
   */
  calculate(...args) {
    const [direction, isReposition] = args;
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
      if (result > unitCount && isReposition) {
        result = 1;
      }
    } else if (direction === '<') {
      result = current - 1;
      if (result <= 0 && isReposition) {
        result = unitCount;
      }
    }
    return result;
  }

  /**
   * Calculate the maximum page number.
   *
   * @return {Number}
   */
  maximum() {
    const isLoop = this.sliderm.getOption('loop');
    const isPreview = this.sliderm.getOption('preview');
    const isGrouping = this.sliderm.getOption('grouping');
    const columns = this.sliderm.getOption('columns');
    const isClone = isLoop || isPreview;

    if (isGrouping) {
      return this.sliderm.getGroupCount();
    }

    if (isClone) {
      return this.sliderm.getItemCount();
    }

    return this.sliderm.getItemCount() - columns + 1;
  }
}
