/**
 * The width of each slide item.
 *
 * @param {Object} sliderm The Sliderm object.
 * @param {Element} slider The DOM element of the slider container.
 * @param {...any} args The arguments
 */
export default function width(sliderm, slider, ...args) {
  const [item] = args;
  const per = sliderm.getOption('columns');
  const itemWidth = parseFloat(((1 / per) * 100).toFixed(2));
  item.style.setProperty('flex', `0 0 ${itemWidth}%`);

  sliderm.on('destory', () => {
    item.style.removeProperty('flex');
  });
}
