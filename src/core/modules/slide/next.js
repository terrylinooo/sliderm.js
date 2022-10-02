import { queue } from '../../../utilities/await';

/**
 * Slide every single slide item from right to left.
 *
 * @param {Object} sliderm The Sliderm instance.
 * @param {Array} items The collection of slide items.
 * @param {Number} itemCount The total of slide items.
 */
export const goNextItem = (sliderm, items, itemCount) => {
  for (let i = 0; i < itemCount; i += 1) {
    const item = items[i];
    const originalPosition = i + 1;
    const order = Number(item.getAttribute('data-order'));
    let xAxis = 0;
    let nextOrder = 0;
    if (order === 1) {
      nextOrder = itemCount;
      queue(() => {
        xAxis = (nextOrder - originalPosition) * 100;
        sliderm.go('transition', item, 'stop');
        sliderm.go('transform', item, xAxis);
      }, sliderm.getOption('duration'));
    } else {
      nextOrder = order - 1;
    }
    xAxis = (order - originalPosition - 1) * 100;
    sliderm.go('transition', item);
    sliderm.go('transform', item, xAxis);
    item.setAttribute('data-order', nextOrder);
  }
};

/**
 * Slide grouping slide items from left to right.
 *
 * @param {Object} sliderm The Sliderm instance.
 * @param {Array} items The collection of slide items.
 * @param {Number} itemCount The total of slide items.
 * @param {Number} groupCount The total of grouping slide items.
 */
export const goNextGroup = (sliderm, items, itemCount, groupCount) => {
  const duration = sliderm.getOption('duration');
  const columns = sliderm.getOption('columns');

  for (let i = 0; i < itemCount; i += 1) {
    const item = items[i];
    const originalPosition = i + 1;
    const originalGroup = Math.ceil(originalPosition / columns);
    const order = Number(item.getAttribute('data-order'));
    let xAxis = 0;
    let nextOrder = 0;

    if (order === 1) {
      nextOrder = groupCount;

      if (nextOrder === originalGroup) {
        queue(() => {
          xAxis = 0;
          sliderm.go('transition', item, 'stop');
          sliderm.go('transform', item, xAxis);
        }, duration);
      } else {
        queue(() => {
          xAxis = (nextOrder - order) * 100 * columns;
          sliderm.go('transition', item, 'stop');
          sliderm.go('transform', item, xAxis);
        }, duration);
      }
    } else {
      nextOrder = order - 1;
    }
    xAxis = (order - originalGroup - 1) * 100 * columns;
    sliderm.go('transition', item);
    sliderm.go('transform', item, xAxis);
    item.setAttribute('data-order', nextOrder);
  }
};
