/**
 * Position the slide items horizontally.
 *
 * @param {Object} sliderm The Sliderm object.
 * @param {...any} args The arguments
 */
export default function transform(sliderm, ...args) {
  const [item, xAxis] = args;
  item.style.setProperty('transform', `translateX(${xAxis}%)`);
}
