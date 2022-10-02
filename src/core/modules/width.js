/**
 * The width of each slide item.
 *
 * @param {Object} sliderm The Sliderm object.
 * @param {...any} args The arguments
 */
export default function width(sliderm, ...args) {
  const [item] = args;
  const per = sliderm.getOption('columns');
  const itemWidth = (1 / per) * 100;
  item.style.setProperty('flex', `0 0 ${itemWidth}%`);
}
