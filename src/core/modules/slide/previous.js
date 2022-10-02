import { queue } from '../../../utilities/await';

/**
 * Slide every single slide item from left to right.
 *
 * @param {Object} sliderm The Sliderm instance.
 * @param {Array} items The collection of slide items.
 * @param {Number} itemCount The total of slide items.
 */
export const goPreviousItem = (sliderm, items, itemCount) => {
  for (let i = itemCount - 1; i >= 0; i -= 1) {
    const item = items[i];
    const originalPosition = i + 1;
    const order = Number(item.getAttribute('data-order'));
    let xAxis = 0;
    let nextOrder = 0;
    if (order === itemCount) {
      nextOrder = 1;
      xAxis = (nextOrder - originalPosition - 1) * 100;
      sliderm.go('transition', item, 'stop');
      sliderm.go('transform', item, xAxis);
    } else {
      nextOrder = order + 1;
    }

    queue(() => {
      xAxis = (nextOrder - originalPosition) * 100;
      sliderm.go('transition', item);
      sliderm.go('transform', item, xAxis);
      item.setAttribute('data-order', nextOrder);
    });
  }
};

/**
 * Slide grouping slide items from right to left.
 *
 * @param {Object} sliderm The Sliderm instance.
 * @param {Array} items The collection of slide items.
 * @param {Number} itemCount The total of slide items.
 * @param {Number} groupCount The total of grouping slide items.
 */
export const goPreviousGroup = (sliderm, items, itemCount, groupCount) => {
  const columns = sliderm.getOption('columns');

  for (let i = itemCount - 1; i >= 0; i -= 1) {
    const item = items[i];
    const originalPosition = i + 1;
    const originalGroup = Math.ceil(originalPosition / columns);
    const order = Number(item.getAttribute('data-order'));
    let xAxis = 0;
    let nextOrder = 0;
    if (order === groupCount) {
      nextOrder = 1;
      xAxis = (nextOrder - originalGroup - 1) * 100 * columns;
      sliderm.go('transition', item, 'stop');
      sliderm.go('transform', item, xAxis);
    } else {
      nextOrder = order + 1;
    }

    queue(() => {
      xAxis = (nextOrder - originalGroup) * 100 * columns;
      sliderm.go('transition', item);
      sliderm.go('transform', item, xAxis);
      item.setAttribute('data-order', nextOrder);
    });
  }
};
