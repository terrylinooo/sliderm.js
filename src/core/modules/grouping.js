/**
 * Set the grouping number for each slide item.
 *
 * @param {Object} sliderm The Sliderm instance.
 * @param {...any} args The arguments
 */
export default function grouping(sliderm, ...args) {
  const [item, index] = args;
  const isGrouping = sliderm.getOption('grouping');
  const orderNumber = index + 1;

  if (isGrouping) {
    const columns = sliderm.getOption('columns');
    const groupNumber = Math.ceil((index + 1) / columns);
    item.setAttribute('data-order', groupNumber);
    return;
  }
  item.setAttribute('data-order', orderNumber);
}
